import React from 'react'
import { TickIcon } from '../App'

export const Todo = ({ title, is_done, }) => {
    return (
        <div className={`todo__item ${!is_done ? "todo-blue" : ""}`}>
            <p style={{ textDecoration: is_done ? "line-through" : "unset" }}>{title}</p>
            <div className="todo__btns">
                <div className={`todo__check_block ${is_done ? "todo__is_done" : "todo__not_done"}`}>
                    {
                        is_done ? <TickIcon width={14} height={10} /> : null
                    }
                </div>
                <svg className={"todo__delete"} width="18" height="20" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g className={"delete-top"} style={{ display: 'block' }}>
                        <path d="M1 6.00002H21" stroke="#FF5050" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.24994 3.5C7.24994 2.11929 8.36923 1 9.74994 1H12.2499C13.6307 1 14.7499 2.11929 14.7499 3.5V6H7.24994V3.5Z" stroke="#FF5050" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <path d="M3.49995 9.75001V19.75C3.49995 21.8211 5.17889 23.5 7.24995 23.5H14.75C16.8211 23.5 18.5 21.8211 18.5 19.75V9.75001" stroke="#FF5050" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.5 12.25V18.5" stroke="#FF5050" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.4999 12.25V18.5" stroke="#FF5050" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    )
}
