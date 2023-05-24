'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { useContext } from 'react';
import { ToDoContext } from '@/app/list-context';
import Link from 'next/link';

export default function Home() {
    const { list } = useContext(ToDoContext);
    console.log(list);
    return (
        <main className={styles.main}>
            <Link href='/add'>Add todo</Link>
            <table style={{}}>
                <thead>
                    <tr>
                        <th>What</th>
                        <th>When</th>
                        <th>Who</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((todo) => {
                        return (
                            <tr key={todo.id}>
                                <td>{todo.what}</td>
                                <td>{todo.when}</td>
                                <td>{todo.who}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </main>
    );
}
