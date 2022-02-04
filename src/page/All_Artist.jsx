import React from 'react';
import './style.css'
import { DataGrid } from '@mui/x-data-grid';

export default function All_Artist() {

    const data = [
        { id: 0, avatar_url:'https://randomuser.me/api/portraits/med/men/75.jpg', artist: 'Jean-Palmida L.S', slug: "Jean Cokou", count: 5 },
        { id: 1, avatar_url:'https://randomuser.me/api/portraits/med/men/12.jpg', artist: 'Azerbaijan L.M', slug: "Jean Cokou", count: 5 },
        { id: 2, avatar_url:'https://randomuser.me/api/portraits/med/men/55.jpg', artist: 'Alain Dupont', slug: "Jean Cokou", count: 5 },
        { id: 3, avatar_url:'https://randomuser.me/api/portraits/med/men/18.jpg', artist: 'Evounkplémin constant', slug: "Jean Cokou", count: 5 }
    ];

    const columns = [
        {
            field: 'artist',
            headerName: "Artist",
            flex: 3,
            disableColumnMenu: true,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar_url} alt="" />
                        <p className="userListUsername word--wrap">{params.row.artist}</p>
                    </div>
                );
            },
        },
        {
            field: 'slug',
            headerName: 'Slug',
            flex: 3,
            disableColumnMenu: true,
        },
        {
            field: 'count',
            headerName: 'Count',
            flex: 4,
            disableColumnMenu: true,
        }
    ];

    const onRowClick = () => {}

    return (
        <div className='page'>
            <h1 className=''>Artist/Genre</h1>
            <div className="flex space-2">
                <input className='' type="date" name="" id="" />
                <p>Artist</p>
                <p>Genre</p>
                <p>Albums</p>
            </div>
            <div className="mt-4" style={{ height: 350 }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={8}
                    onRowClick={onRowClick}
                    disableColumnFilter={false}
                />
            </div>


        </div>
    );
}
