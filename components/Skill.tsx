import { FunctionComponent } from "react";

import { Skill as SkillType } from "../type";

const Skill: FunctionComponent<{
  data: SkillType;
}> = ({ data: { level, name, Icon } }) => {
  return (
    <div className='my-2 text-white bg-gray-300 rounded-full'>
      <div
        style={{ width: level }}
        className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600'
      >
        <Icon className='mr-3' />
        {name}
      </div>
    </div>
  );
};

export default Skill;
