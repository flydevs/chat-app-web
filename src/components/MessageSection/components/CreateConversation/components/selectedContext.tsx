import React from "react";
import { storageUsers } from "../../../../../utils/interfaces";

const SelectedContext = React.createContext<{
    select: storageUsers,
    setSelect: (arg0:storageUsers)=>void
}>({
    select:{},
    setSelect: ({})=>{}
});

export {SelectedContext}