import React from 'react'
import * as Components from '@/Components';
import ObjReact from '@/utilities/DynamicComponent';
import jsonData from '@/utilities/vithiApp.json'
import componentJson from '@/utilities/ComponentData.json';
import { generateCompoLib, generateComponentList } from '@/utilities/methods';

const page = ({ params }: any) => {

  const subPath = params.subPath;
  const mainPath = params.mainPath;

  const slugMapping = jsonData.filter((subData: any) => subData.slug === `${mainPath}/${subPath}`)[0];


  return (
    <div>
      <ObjReact objReact={{
        path: `${mainPath}/${subPath}`,
        component: [
          {
            component: "Navbar",
            props: {
              ...componentJson[0].props,
              active: mainPath
            },
            children: null
          },
          ...generateComponentList(slugMapping?.Components),
          {
            component: "Footer",
            children: null,
            props: componentJson[1].props
          }
        ],
        compoLib: {
          ...generateCompoLib(Components, slugMapping?.Components),
          "Navbar": Components.Navbar,
          "Footer": Components.Footer
        }
      }} />
    </div>
  )
}

export default page
