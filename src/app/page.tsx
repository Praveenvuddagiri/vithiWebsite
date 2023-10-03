import React from 'react'
import * as Components from '@/Components';
import ObjReact from '@/utilities/DynamicComponent';
import jsonData from '@/utilities/vithiApp.json'
import { generateCompoLib, generateComponentList } from '@/utilities/methods';

const page = ({ params }: any) => {

  const slugMapping = jsonData.filter((subData:any)=> subData.slug === `home`)[0];
  

  return (
    <div>
      <ObjReact objReact={{
        path: `/`,
        component: generateComponentList(slugMapping?.Components),
        compoLib: generateCompoLib(Components, slugMapping?.Components)
      }} />
    </div>
  )
}

export default page
