import React, {useState} from 'react';

export const AppContext = React.createContext({});

export default props => {
    const [modalState, setModalState] = useState(false);
    const [sidebarState, setSidebarState] = useState(true);

    const closeModalHandler = () => {
        setModalState(false);
    }

    const openModalHandler = () => {
        setModalState(true);
    }

    const hideSidebarHandler = () => {
        setSidebarState(false);
    }

    const showSidebarHandler = () => {
        setSidebarState(true);
    }

    return(
        <AppContext.Provider value={{
            modalState,
            sidebarState,
            onCloseModal: closeModalHandler,
            onOpenModal: openModalHandler,
            onShowSidebar: showSidebarHandler,
            onHideSidebar: hideSidebarHandler,
        }}>{props.children}</AppContext.Provider>
    );
}