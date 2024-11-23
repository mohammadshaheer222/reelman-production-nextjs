"use client"

import Sidebar from "@/_common/sidebar";
import { TextInputBox } from "@/_components/form_elements";
import { useImageCompression } from "@/_components/image-compression";
import ModalComponent from "@/_components/modal";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { TableColumn } from "react-data-table-component";

const DataTable = dynamic(() => import("react-data-table-component"), {
    ssr: false,
});

type RowData = {
    id: number;
    name: string;
    link: string;
};

export function PageContent() {
    const [isVisible, setIsVisible] = useState(false);
    const [avatar, setAvatar] = useState<File | null>(null);
    const [link, setLink] = useState("");
    const { compressedImage, compressImage } = useImageCompression();

    const columns: TableColumn<RowData>[] = [
        {
            name: 'ID',
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: 'Images',
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: 'Link',
            selector: (row) => row.link,
            sortable: true,
        },
        {
            name: 'Actions',
        },
    ];

    const data: RowData[] = [
        { id: 1, name: 'Wedding', link: 'https://instagram.com' },
        { id: 2, name: 'Photoshoot', link: 'https://instagram.com' }
    ];

    const handleAvatar = async (value: File | undefined) => {
        if (value) {
            compressImage(value);
        }
    };

    useEffect(() => {
        if (compressedImage) {
            setAvatar(compressedImage);
        }
    }, [compressedImage]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const response = await axios.post('', avatar);
        // if (response.status) {

        // } else {

        // }
    }
    
    return (
        <div>
            <Sidebar>
                <div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-end justify-end">
                            <button className="px-4 py-2 bg-black-shade-900 text-white hover:bg-white hover:text-black-shade-900 rounded-sm"
                                onClick={() => setIsVisible(true)}> Add Instagram Images
                            </button>
                        </div>
                        <DataTable
                            columns={columns as TableColumn<unknown>[]}
                            data={data}
                        // pagination
                        // paginationPerPage={2}
                        />
                    </div>
                    <ModalComponent
                        isVisible={isVisible}
                        contentWrapperClass={`max-w-[576px] `}
                        bodyWrapperClass={`!pl-9 !pr-[30px] mob-land:!px-4 pb-9 mob-land:pb-4 h-[50vh] overflow-y-auto overflow-x-hidden`}
                        contentClass={`rounded-2xl pr-[6px]`}
                        toggleVisibility={(visible: boolean) => setIsVisible(visible)}
                        modalHeader={"Upload Instagram Images"}
                        modalBody={
                            <>
                                <form className="flex flex-col items-center w-full h-full gap-4" onSubmit={handleSubmit}>
                                    <TextInputBox type="text" placeholder="Link" value={link} onChangeValueText={(value: string) => setLink(value)} />
                                    <TextInputBox type="file" id="avatar" name="avatar" onChangeValue={(file: File | undefined) => handleAvatar(file)} imageState={avatar} />
                                    {avatar && (
                                        <input type="submit" className="px-8 py-2 bg-black-shade-900 text-white hover:bg-white hover:text-black-shade-900 rounded-sm"
                                        //   value={isLoading ? "Uploading..." : "Upload"}
                                        />
                                    )}
                                </form>
                            </>
                        }
                    />
                </div>
            </Sidebar>
        </div>
    )
}
