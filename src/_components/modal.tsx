import React from "react";
import { MdClose } from "react-icons/md";

export default function ModalComponent({
    isVisible,
    toggleVisibility,
    modalHeader,
    modalBody,
    modalFooter,
    containerClass = ``,
    contentWrapperClass = ``,
    contentClass = ``,
    headerClass = ``,
    bodyClass = ``,
    bodyWrapperClass = ``,
    footerClass = ``,
    closeButton = ``,
}: {
    isVisible: boolean;
    toggleVisibility: (visible: boolean) => void;
    modalHeader?: React.ReactNode | undefined;
    modalBody: React.ReactNode;
    modalFooter?: React.ReactNode | undefined;
    containerClass?: string | undefined;
    contentWrapperClass?: string | undefined;
    contentClass?: string | undefined;
    headerClass?: string | undefined;
    bodyWrapperClass?: string | undefined;
    bodyClass?: string | undefined;
    footerClass?: string | undefined;
    primaryColor?: string | undefined;
    closeButton?: string | undefined;
}) {
    return (
        <>
            {isVisible && (
                <>
                    <div className={`justify-center items-center flex z-50 fixed inset-0  outline-none focus:outline-none ${containerClass}`}>
                        <div className={`overflow-x-hidden overflow-y-auto w-full grid items-center justify-items-center h-[100vh] scroll-block`}>
                            <div className={`m-auto px-2.5 w-full ipad-land:mx-2.5 py-14 mob-land:py-10 ${contentWrapperClass}`}>
                                {/*content*/}
                                <div className={`border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none overflow-hidden ${contentClass}`}>
                                    {/*header*/}
                                    <div className={`flex items-start justify-between p-5 rounded-t-2xl ${headerClass}`}>
                                        {typeof modalHeader !== "undefined" && (
                                            <div className={``}>{modalHeader}</div>
                                        )}
                                        <button className={`ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none absolute top-4 right-4 ${closeButton}`} onClick={() => toggleVisibility(false)}>
                                           <MdClose />
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className={`relative px-4 content-box flex-auto ${bodyWrapperClass}`}>
                                        <div className={`${bodyClass}`}>{modalBody}</div>
                                    </div>
                                    {/*footer*/}
                                    {typeof modalFooter !== "undefined" && (
                                        <div className={`flex items-center justify-center p-4 rounded-b-2xl ${footerClass}`}>{modalFooter}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}