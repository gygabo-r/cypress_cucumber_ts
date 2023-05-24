'use client';
import { createContext, PropsWithChildren, useCallback, useState } from 'react';

export type ToDo = {
    id: number;
    who: string;
    what: string;
    when: string;
};

type ToDoContextType = {
    list: ToDo[];
    add: (todo: ToDo) => void;
    remove: (id: number) => void;
};

export const ToDoContext = createContext<ToDoContextType>({
    add: (todo) => {},
    list: [],
    remove: (id) => {},
});

const ListContextProvider = ({ children }: PropsWithChildren) => {
    const [list, setList] = useState<ToDo[]>([]);
    const add = useCallback(
        (todo: ToDo) => {
            const nextId = Math.max(...[...list.map((x) => x.id), 0]) + 1;
            setList((s) => [...s, { ...todo, id: nextId }]);
        },
        [list]
    );
    const remove = useCallback(
        (id: number) => {
            const toDelete = list.findIndex((t) => t.id === id);
            if (toDelete > -1) {
                setList([...list.splice(toDelete, 1)]);
            }
        },
        [list]
    );

    return (
        <ToDoContext.Provider value={{ list, remove, add }}>
            {children}
        </ToDoContext.Provider>
    );
};

export default ListContextProvider;
