// FirstSectionHome.jsx
import React from 'react';

export const FirstSectionHome = ({ chercher }) => {
    return (
        <div className="w-100 h-[15vh] bg-slate-800 flex">
            <div className="w-100 flex justify-center items-center">
                <input
                    type="text" placeholder="Search" onChange={(e) => chercher(e.target.value)} className="px-4 py-2 border rounded-full w-25"/>
                </div>
        </div>
    );
}
