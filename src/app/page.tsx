"use client"
import React from 'react'
import * as Components from '@/Components';
import ObjReact from '@/utilities/DynamicComponent';
import jsonData from '@/utilities/vithiApp.json'
import { generateCompoLib, generateComponentList } from '@/utilities/methods';
import componentJson from '@/utilities/ComponentData.json';
import { getPageData } from '@/utilities/apiCalls';
import LZUTF8 from 'lzutf8';


const page = ({ params }: any) => {

  const pageData = getPageData()?.allPages?.docs;

  console.log(pageData, "home ");
  

  let slugMapping = pageData?.filter((subData:any)=> subData.slug === `home`)[0];

  const componentsJson = slugMapping && JSON.parse(LZUTF8.decompress(slugMapping.components, {inputEncoding: "Base64"}));

  console.log(componentsJson, "mapped data");


  
  
  return (
    <div>
      <ObjReact objReact={{
        path: slugMapping?.path,
        component: [
          {
            component: "Navbar",
            props: {
              ...componentJson[0].props,
              active: "home"
            },
            children: null
          },
          ...generateComponentList(componentsJson),
          {
            component: "Footer",
            children: null,
            props: componentJson[1].props
          },
          {
            component: "MoveToUp",
            children: null
          }
        ],
        compoLib: {
          ...generateCompoLib(Components, componentsJson),
          "Navbar": Components.Navbar,
          "Footer": Components.Footer,
          "MoveToUp": Components.MoveToUp
        }
      }} />
    </div>
  )
}

export default page
