import React from 'react';
import NavBar from '../../components/Navbar';
import { motion } from "framer-motion";
import { IoMdBookmarks } from "react-icons/io";
import { Link } from 'react-router-dom';

export interface IUser {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    address: string,
    service: string
}

export default function Servicers() {

    const mockdata: Array<IUser> = [{
        "id": 1,
        "first_name": "Davine",
        "last_name": "Fouracre",
        "email": "dfouracre0@cdc.gov",
        "address": "28 Spenser Point",
        "service": "Paralegal"
    },
    {
        "id": 2,
        "first_name": "Shelley",
        "last_name": "Lytle",
        "email": "slytle1@bloglines.com",
        "address": "2 Merrick Street",
        "service": "Professor"
    },
    {
        "id": 3,
        "first_name": "Horacio",
        "last_name": "Leydon",
        "email": "hleydon2@g.co",
        "address": "0 Londonderry Street",
        "service": "Executive Secretary"
    },
    {
        "id": 4,
        "first_name": "Heath",
        "last_name": "Starrs",
        "email": "hstarrs3@thetimes.co.uk",
        "address": "9 Mendota Trail",
        "service": "Chief Design Engineer"
    },
    {
        "id": 5,
        "first_name": "Suzette",
        "last_name": "Cranstoun",
        "email": "scranstoun4@stanford.edu",
        "address": "2 Dunning Plaza",
        "service": "Cost Accountant"
    },
    {
        "id": 6,
        "first_name": "Dillon",
        "last_name": "Vardey",
        "email": "dvardey5@usa.gov",
        "address": "84 Menomonie Trail",
        "service": "Assistant Professor"
    },
    {
        "id": 7,
        "first_name": "Delphine",
        "last_name": "Baudains",
        "email": "dbaudains6@pbs.org",
        "address": "95 Sutteridge Alley",
        "service": "Analog Circuit Design manager"
    },
    {
        "id": 8,
        "first_name": "Dara",
        "last_name": "Banghe",
        "email": "dbanghe7@shop-pro.jp",
        "address": "02 Mendota Parkway",
        "service": "Analyst Programmer"
    },
    {
        "id": 9,
        "first_name": "Adria",
        "last_name": "Ranns",
        "email": "aranns8@networkadvertising.org",
        "address": "97219 Rusk Road",
        "service": "Assistant Manager"
    },
    {
        "id": 10,
        "first_name": "Marilee",
        "last_name": "Laughtisse",
        "email": "mlaughtisse9@symantec.com",
        "address": "2154 Killdeer Parkway",
        "service": "Paralegal"
    }]
    return (
        <>
            <div>
                <div className='text-center text-blue-500 italic font-bold p-4 text-4xl underline capitalize'>Service Providers</div>
                <div className='justify-center'>
                    {mockdata.map((serv_pov: IUser): React.JSX.Element => (

                        <motion.div whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }} className='service_provider border-2 my-5 rounded shadow-2xl mx-14 p-4 group hover:cursor-pointer hover:bg-white flex justify-between'>
                            <div>
                                <h1 className='text-blue-500 font-extrabold text-2xl italic capitalize group-hover:text-red-500 hover:cursor-pointer'>{serv_pov.service}</h1>
                                <div className='name_div flex'><p className='font-bold'>Name:&nbsp; </p><p>{serv_pov.first_name + " " + serv_pov.last_name}</p></div>
                                <div className='email_div flex'><p className='font-bold'>Email:&nbsp; </p><p className='italic font-normal'>{serv_pov.email}</p></div>
                                <div className='shop_location flex'><p className='font-bold'>Address:&nbsp; </p><p>{serv_pov.address}</p></div>
                            </div>
                            <div className=' items-center mt-4'>
                            {/* <a href='/'  className="bn633-hover bn27 flex justify-center gap-2 items-center"><IoMdBookmarks/>Book</a> */}
                            <Link to="/home" className='bn633-hover bn27 flex justify-center gap-2 items-center' state={serv_pov}><IoMdBookmarks/>Book</Link>
                            </div>
                        </motion.div>

                    ))}
                </div>
            </div>
        </>

    )
}
