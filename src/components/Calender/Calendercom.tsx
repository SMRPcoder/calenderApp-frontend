import moment from 'moment';
import React, { useState,MouseEventHandler, useEffect } from 'react';
import $ from "jquery";

interface CallerBack{
    OnChange?:()=>void,
    setDate?:React.Dispatch<React.SetStateAction<string|undefined>>
}

function MyCalendar({OnChange,setDate}:CallerBack) {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState<Date>(today);
    const [getDate,setGetDate]=useState<string|undefined>(undefined)

    const selectDate=(element:HTMLElement|JQuery)=>{
        $(".date_text_div").each((index,elem)=>{
            if($(elem).hasClass("bg-yellow-300")){
                $(elem).removeClass("bg-yellow-300");
            }
        })
        $(element).addClass("bg-yellow-300");
        if(setDate){
            setDate($(element).attr("data-date"));
        }
    }

    useEffect(()=>{
        var newdate:JQuery=getDate?$(`#${getDate}`):$(`#${moment().format("DD-MMMM-YYYY")}`);
        selectDate(newdate);
    },[currentDate])

    const handleChange:MouseEventHandler<HTMLDivElement>=(e)=>{
        if(e.currentTarget){
            selectDate(e.currentTarget);
            setGetDate($(e.currentTarget).attr("data-date"));
            
            if(OnChange){
                OnChange();
            }
        }
    }

    const renderHeader = () => {
        const monthOptions: Intl.DateTimeFormatOptions = {
            month: 'long',
            year: 'numeric',
        };
        return (
            <div className="flex text-center justify-between">
                <button className='bg-blue-500 p-3 rounded font-semibold' onClick={prevMonth}>&lt;&lt; Previous</button>
                <h1 className='font-bold capitalize underline mt-3'>{currentDate.toLocaleDateString(undefined, monthOptions)}</h1>
                <button className='bg-blue-500 p-3 rounded font-semibold' onClick={nextMonth}>Next &gt;&gt;</button>
            </div>
        );
    };
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const renderDaysOfWeek = () => {
        return (
            <tr>
                {daysOfWeek.map(day => (
                    <th key={day} className="p-9">{day}</th>
                ))}
            </tr>
        );
    };

    const renderCells = (newDate: Date): Array<JSX.Element> => {
        const firstDay = moment(newDate).startOf("month");
        const lastDay = moment(newDate).endOf("month");

        let day = firstDay;
        const lastweek = lastDay.week() == 1 ? 53 : lastDay.week();
        const tablerow: JSX.Element[] = [];
        for (let i = firstDay.week(); i <= lastweek; i++) {
            tablerow.push(
                <tr key={i}>
                    {daysOfWeek.map((dayname, index) => {
                        const thisDay = day.format("DD");
                        const fullDate=day.format("DD-MMMM-YYYY");
                        if (day.format("ddd") == dayname && day.get("month") <= lastDay.get("month")) {
                            if (moment(lastDay.get("month")).daysInMonth() != Number(day.format("DD"))) {
                                day = firstDay.add(1, "day");
                            }
                            var parsedDate=moment(fullDate,"DD-MMMM-YYYY");

                            return (
                                <td key={index}>
                                   
                                    {parsedDate.isSameOrAfter(moment(),"day")?
                                    <>
                                    <div className='py-1 bg-blue-500 '></div>

                                    <div id={fullDate} onClick={handleChange} data-date={fullDate} className='date_text_div font-bold text-xl p-4 bg-gray-300 text-center hover:bg-blue-500 hover:text-white hover:cursor-pointer'>
                                        {thisDay}
                                    </div>
                                    </>:
                                    <>
                                    <div className='py-1 bg-gray-800 '></div>
                                    <div id={fullDate}  data-date={fullDate} className='date_text_div font-bold text-xl p-4 bg-gray-500 text-center'>
                                    {thisDay}
                                </div>
                                </>
                                    }
                                </td>
                            )
                        } else {

                            return (
                                <td key={index}>
                                    <div className='py-1 bg-blue-500 '></div>

                                    <div className='font-bold text-xl p-7 bg-gray-300 text-center hover:cursor-pointer'>

                                    </div>
                                </td>
                            )
                        }
                    })}
                </tr>
            )

        }

        return tablerow;
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    return (
        <div className="w-1/2 m-4">
            {renderHeader()}
            <table className=''>
                <thead>
                    {renderDaysOfWeek()}
                </thead>
                <tbody>
                    {renderCells(currentDate)}
                </tbody>
            </table>
        </div>
    );
};

export default MyCalendar;