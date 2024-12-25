import React from 'react';
import { useAuthContext } from '../../../../Hooks/useAuthContext';

const MyApplyRow = ({ application, index, handleUpdate, handleDelete }) => {
  const { _id, title, first_name, last_name, contact } = application;

  const { darkTheme } = useAuthContext();

  return (
    <tr
      className={`${index % 2 !== 0 && 'bg-[#f1f1f1]'} hover:bg-[#e6e6e6] ${
        darkTheme && 'text-gray-300'
      }`}
    >
      <td className="text-nowrap">{index + 1}</td>
      <td className="text-nowrap">{title}</td>
      <td className="text-center text-nowrap">{`${first_name} ${last_name}`}</td>
      <td className="text-nowrap">{contact}</td>
      <td>
        <div className="flex justify-center items-center gap-4">
          <p
            onClick={() => handleUpdate(application)}
            className="text-green hover:text-orange cursor-pointer"
          >
            Update
          </p>
          <p
            onClick={() => handleDelete(_id)}
            className="text-[#ff8629] hover:text-[#ff0000] px-2 rounded-md cursor-pointer"
          >
            Delete
          </p>
        </div>
      </td>
    </tr>
  );
};

export default MyApplyRow;
