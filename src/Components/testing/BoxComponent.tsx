import React from 'react';

const BoxComponent = ({ className, children}:{children: React.ReactNode, className: string}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default BoxComponent;



// {
//   component:"Box",
//   "prop":{
//     "backgroundColor":"blue"
"margin":"10"

//   }
//   "children":[
//     {
//       component:"Box",
//       "prop":{
//         className:""
//       },
//       component:"text",
//       "prop":{
//         className:""
//       },


//   }]

// }
