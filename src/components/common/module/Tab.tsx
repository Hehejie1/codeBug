import * as React from 'react';
import { Component } from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;


export interface TabsProps {
    
}
 
export interface TabsState {
    
}
 
class Tab extends React.Component<TabsProps, TabsState> {
    constructor(props: TabsProps) {
        super(props);
        this.clickTab = this.clickTab.bind(this)
    }
    clickTab(key: string){
        console.log(key);
    }
    render() { 
        return ( 
            <Tabs 
                defaultActiveKey="1"  
                tabPosition="bottom"
                onTabClick={this.clickTab}
            >
                <TabPane tab="Tab 1" key="1">
                    首页
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    列表
                </TabPane>
            </Tabs>
         );
    }
}
 
export default Tab;