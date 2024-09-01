import React from "react";
function KeyButton({ keyName, keyCode,CustomClass, CustomStyle }) {
  // console.log();

  return (
    <>
      <button
        type="button"
        style={CustomStyle}
        id={keyCode}
        className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium text-red-500
                  focus:outline-none rounded-lg border border-red-500 hover:bg-gray-100 
                hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 
                dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 
                dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${CustomClass} `}
      >
        {keyName}
      </button>
    </>
  );
}

export default KeyButton;
