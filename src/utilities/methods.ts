import { ComponentType } from "./DynamicComponent";

export const generateCompoLib = (parentComponent: any, pageComponents: any) => {
    const compLib: Record<string, any> = {};
    pageComponents?.map((com: any) => {
        const cname = com.component;
        compLib[cname] = parentComponent[cname];

        com.children && com.children.map((child:any) => {
            const cname = child.component;
            compLib[cname] = parentComponent[cname];

            child.children && child.children.map((child:any) => {
                const cname = child.component;
                compLib[cname] = parentComponent[cname];
            })
        })
    })

    return compLib;
}


export const generateComponentList = (pageComponents: any) => {
    let componetsList: ComponentType[] = [];
    
    pageComponents?.map((com: any) => {
        let tempComp:ComponentType= {
            component: com.component,
            props: com.props,
            children: com.children? com.children : null
        }
        componetsList.push(tempComp);
    })
    

    console.log(componetsList[6]?.children);
    
    return componetsList;
} 