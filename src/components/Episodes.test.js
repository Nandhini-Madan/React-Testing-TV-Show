import React from "react";
import Episodes from "./Episodes";
import {render} from "@testing-library/react";

test("Episodes list shows data when rendering",()=>{
    //Arrange:simulating behaving 
    const {queryAllByTestId,getAllByTestId,rerender}=render(<Episodes episodes={[]}/>);
    const initialSeason =queryAllByTestId(/episode/i);
    expect(initialSeason).toHaveLength(0);
    expect(initialSeason).toEqual([]);
    //Act
    //Assert
})