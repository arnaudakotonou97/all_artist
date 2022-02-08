import React, { useState } from 'react';
import './style.css'
import { DataGrid } from '@mui/x-data-grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function All_Artist() {

    const [value, setValue] = useState(null);

    const data = [
        { id: 0, avatar_url: 'https://randomuser.me/api/portraits/med/men/75.jpg', artist: 'Jean-Palmida L.S', slug: "Jean Cokou", count: 5 },
        { id: 1, avatar_url: 'https://randomuser.me/api/portraits/med/men/12.jpg', artist: 'Azerbaijan L.M', slug: "Jean Cokou", count: 4 },
        { id: 2, avatar_url: 'https://randomuser.me/api/portraits/med/men/55.jpg', artist: 'Alain Dupont', slug: "Jean Cokou", count: 3 },
        { id: 3, avatar_url: 'https://randomuser.me/api/portraits/med/men/18.jpg', artist: 'Evounkplémin constant', slug: "Jean Cokou", count: 2 }
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

    const onRowClick = () => { }

    return (
        <>
            <div className="navbar">
                <svg width="28px" height="22px" viewBox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Outlined" transform="translate(-919.000000, -3438.000000)">
                            <g id="Navigation" transform="translate(100.000000, 3378.000000)">
                                <g id="Outlined-/-Navigation-/-menu" transform="translate(816.000000, 54.000000)">
                                    <g>
                                        <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                        <path d="M3,18 L21,18 L21,16 L3,16 L3,18 Z M3,13 L21,13 L21,11 L3,11 L3,13 Z M3,6 L3,8 L21,8 L21,6 L3,6 Z" id="🔹-Icon-Color" fill="#FFFFFF"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <h1 className='logo'>MUSIKART</h1>
                <span className="links">
                    <p>CHARTS</p>
                    <p>MUSIQUE</p>
                    <p>CULTURE</p>
                    <p>MEDIA</p>
                </span>

                <div className="flex ml-auto">
                    <button className="btn-outline">LOGIN</button>
                    <button className="btn-primary">S'INSCRIRE</button>
                </div>
            </div>
            <div className='page'>
                <h1 className=''>Artist/Genre</h1>
                <div className="flex my-1 items-center">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Selectionner la période"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                    <FormControl>
                        <RadioGroup className='ml-2' row aria-labelledby="filters" defaultValue="genre" name="filters">
                            <FormControlLabel value="artist" control={<Radio />} label="Artist" />
                            <FormControlLabel value="genre" control={<Radio />} label="Genre" />
                            <FormControlLabel value="albums" control={<Radio />} label="Albums" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="mt-4" style={{ height: 320 }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={8}
                        onRowClick={onRowClick}
                        disableColumnFilter={false}
                    />
                </div>


            </div>
        </>
    );
}
