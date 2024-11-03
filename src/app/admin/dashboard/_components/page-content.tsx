"use client"

import React, { useState } from "react";

// import axios from "axios";
// import dynamic from "next/dynamic";
import { RxAvatar } from "react-icons/rx";

import Image from "next/image";
import Sidebar from "@/_common/sidebar";
import ModalComponent from "@/_components/modal";

// const DataTable = dynamic(() => import("react-data-table-component"), {
//   ssr: false,
// });

export default function PageContent() {
  const [isVisible, setIsVisible] = useState(false);
  const [avatar, setAvatar] = useState<File | null>(null);

  const handleAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(file);
    }
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const response = await axios.post('', avatar);
    // if (response.status) {

    // } else {

    // }
  }

  // const columns = [
  //   { name: "ID", selector: (row: any) => row.id, width: "20%" },
  //   { name: "Images", selector: (row: any) => row.images, width: "60%" },
  //   { name: "Action", width: "20%" },
  // ];

  // const data = [
  //   { id: 1, images: "Beetlejuice" },
  //   { id: 2, images: "Ghostbusters" },
  // ];

  return (
    <Sidebar>
      <div className="flex flex-col gap-4">
        <div className="flex items-end justify-end">
          <button
            className="px-4 py-2 bg-black-shade-900 text-white hover:bg-white hover:text-black-shade-900 rounded-sm"
            onClick={() => setIsVisible(true)}
          >
            Add Hero image
          </button>
        </div>
        {/* <DataTable
          columns={columns}
          data={data}
          pagination
          paginationPerPage={2}
        /> */}
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
              <div className="flex flex-col justify-center w-full h-full items-center">
                <label
                  htmlFor="avatar"
                  className="flex flex-col justify-center h-full items-center"
                >
                  <div className="py-6">
                    <span className="bg-black-shade-900 w-full text-white px-4 py-2 cursor-pointer active:scale-95 active:shadow-lg duration-100">
                      Browse Your Photos
                    </span>
                    <input
                      className="sr-only"
                      type="file"
                      name="avatar"
                      id="avatar"
                      accept="image/*"
                      onChange={handleAvatar}
                      required
                    />
                  </div>
                </label>
                <span className="inline-block overflow-hidden">
                  {avatar ? (
                    <Image src={URL.createObjectURL(avatar)} alt="Hero image" width={150} height={200} />
                  ) : (
                    <RxAvatar size={100} className="text-gray-300" />
                  )}
                </span>
              </div>
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
