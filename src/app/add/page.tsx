'use client';
import { useCallback, useContext, useState } from 'react';
import { ToDo, ToDoContext } from '@/app/list-context';
import { useRouter } from 'next/navigation';

export default function Add() {
    const router = useRouter();
    const [data, setData] = useState<ToDo>({
        what: '',
        who: '',
        when: '',
        id: -1,
    });
    const { add } = useContext(ToDoContext);

    const handleSubmit = useCallback(
        (d: ToDo) => {
            add(d);
            router.push('/');
        },
        [add, router]
    );

    return (
        <>
            <div>
                <label htmlFor='what'>What</label>
                <input
                    type='text'
                    id='what'
                    value={data.what}
                    onChange={(e) =>
                        setData({ ...data, what: e.currentTarget.value })
                    }
                />
                <label htmlFor='when'>When</label>
                <input type='text' id='when' />
                <label htmlFor='who'>Who</label>
                <input type='text' id='who' />
                <button onClick={() => handleSubmit(data)}>Submit</button>
            </div>
        </>
    );
}
