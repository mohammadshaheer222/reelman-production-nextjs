"use client"
import React from "react"

export const PageLoader = ({showLoader}:{showLoader: boolean}) => {
    return (
        <div className="min-h-[48vh] lap:min-h-[34vh] md-lap:min-h-[29vh] flex items-center justify-center">
            {showLoader && (
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                  }}>
                    <div className="spinner">Loading..</div>
                  </div>
            )}
        </div>
    )
}