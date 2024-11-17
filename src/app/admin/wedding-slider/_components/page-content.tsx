"use client"

import React, { useEffect, useState } from "react";

// import axios from "axios";
import dynamic from "next/dynamic";

import Sidebar from "@/_common/sidebar";
import ModalComponent from "@/_components/modal";
import { TableColumn } from "react-data-table-component";
import { TextInputBox } from "@/_components/form_elements";
import { useImageCompression } from "@/_components/image-compression";

const DataTable = dynamic(() => import("react-data-table-component"), {
  ssr: false,
});

type RowData = {
  id: number;
  name: string;
};

export default function PageContent() {
  const [isVisible, setIsVisible] = useState(false);
  const [avatar, setAvatar] = useState<File | null>(null);
  const { compressedImage, compressImage } = useImageCompression();

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

  const columns: TableColumn<RowData>[] = [
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Actions',
    },
  ];

  const data: RowData[] = [
    { id: 1, name: 'Wedding' },
    { id: 2, name: 'Photoshoot' }
  ];

  return (
    <Sidebar>
      <div className="flex flex-col gap-4">
        <div className="flex items-end justify-end">
          <button
            className="px-4 py-2 bg-black-shade-900 text-white hover:bg-white hover:text-black-shade-900 rounded-sm"
            onClick={() => setIsVisible(true)}
          >
            Add Wedding Slider Images
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
        modalHeader={"Upload Hero Images"}
        modalBody={
          <>
            <form className="flex flex-col items-center w-full h-full gap-4" onSubmit={handleSubmit}>
              <TextInputBox type="file" id="avatar" name="avatar" onChangeValue={(file: File | undefined) => handleAvatar(file)} imageState={avatar} />
              {avatar && (
                <input
                  type="submit"
                  //   value={isLoading ? "Uploading..." : "Upload"}
                  className="px-8 py-2 bg-black-shade-900 text-white hover:bg-white hover:text-black-shade-900 rounded-sm"
                />
              )}
            </form>
          </>
        }
      />
    </Sidebar>
  );
}
