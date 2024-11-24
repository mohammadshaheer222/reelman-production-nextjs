import React from "react";

export default function CheckBox({
    value,
    onTriggerCheck,
    label,
    labelPos = 'after',
    error = ``,
    errorWrapperClass = ``,
    errorElementId = ``,
    containerClass = ``,
    wrapperClass = ``,
    inputClass = ``,
}: {
    value: number;
    primaryColor?: string;
    onTriggerCheck: (status: number) => void;
    label?: React.ReactNode;
    labelPos?: 'before' | 'after';
    error?: string | undefined;
    errorWrapperClass?: string | undefined;
    errorElementId?: string | undefined;
    containerClass?: string | undefined;
    wrapperClass?: string | undefined;
    inputClass?: string | undefined;
}) {
    return (
        <div className={`${containerClass}`}>
            <div className={`flex gap-[9px] items-center py-1 ${wrapperClass}`}>
                {labelPos === 'before' && (
                    <>{label}</>
                )}
                <input type="checkbox" className={`!w-5 min-w-5 h-5 border-solid appearance-none ${inputClass}`}
                    style={{
                        backgroundColor: value === 1 ? "#037D50" : '#FFF',
                        borderColor: value === 1 ? "#000" : "#000",
                        borderWidth: '2px',
                        borderRadius: '8px',
                        padding: "2px"
                    }}
                    checked={value === 1 ? true : false}
                    onChange={(e) => onTriggerCheck(e.target.checked ? 1 : 0)}
                />
                {labelPos === 'after' && (
                    <>{label}</>
                )}
            </div>
            {error !== '' && (
                <div className={`pt-1 text-base text-validation-error tracking-contents ${errorWrapperClass}`} id={errorElementId}>{error}</div>
            )}
        </div>
    )
}