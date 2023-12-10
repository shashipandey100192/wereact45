import React from 'react'
import { Fragment } from 'react';
import { IoIosMore } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import Chartsjs from './Chartsjs';


const mydata = [
    {
        sno: 1,
        heading: '24025',
        subheading: 'Total S',
        icons: <IoIosMore />,
        uicon: <FaBed />
    },
    {
        sno: 2,
        heading: '24050',
        subheading: 'Total P',
        icons: <IoIosMore />,
        uicon: <MdGroups />
    },
    {
        sno: 3,
        heading: '245',
        subheading: 'Total P',
        icons: <IoIosMore />,
        uicon: <FaBed />
    },
    {
        sno: 4,
        heading: '525',
        subheading: 'Total P',
        icons: <IoIosMore />,
        uicon: <FaBed />
    },


]


function Landingpage() {
    return (
        <Fragment>
            <section className='sidenav'>sidebar</section>
            <section className='page'>
                <div className='container-fluid'>
                    <div className='row'>
                        {mydata.map((d) => {
                            return (
                                <div className='col-md-3 p-4'>
                                    <div className='row border rounded-3 bg-white shadow'>
                                        <div className='col-12 text-end'>
                                            <p>{d.icons}</p>
                                        </div>
                                        <div className='col-5'>
                                            <section className='rounded-circle bg-info p-3 text-danger c-img'> {d.uicon}</section>
                                        </div>
                                        <div className='col-7'>
                                            <h3>{d.heading}</h3>
                                            <p>{d.subheading}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <Chartsjs/>
                        </div>
                    </div>

                </div>

            </section>
        </Fragment>


    )
}

export default Landingpage