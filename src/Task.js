import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import {tr} from 'date-fns/locale';

const Task = ({ taskObj, onComplete }) => {
  const tarih = new Date(taskObj.deadline);
  const kalanGun = formatDistanceToNow(tarih, {
    addSuffix: true,
    locale: tr,
  });
  const accentClass = differenceInDays(tarih, new Date()) <= 3 ?  'normal' : 'urgent';

  return (
    <div className="p-6 bg-white rounded-md leading-normal mt-4 shadow-[0_4px_5px_0px_rgba(0,0,0,0.10)]">
      <h3 className="text-lg text-task">{taskObj.title}</h3>
      <div className="text-xs pt-1">
        son teslim: <span className={`${accentClass} px-2 py-1 inline-block rounded-sm`}>{kalanGun}</span>
      </div>
      <p className="pt-2 pb-3 px-0 text-sm text-[#444]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block py-1.5 px-3 text-sm border-solid border-2 border-pill rounded-3xl mr-1 mb-1.5" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button className="block py-[5px] px-3 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0px_rgb(0,0,0,0.05)] rounded-1 border-0 cursor-pointer  " onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
