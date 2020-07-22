import React from 'react';
import ReactExport from 'react-export-excel';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

var pruebaVector =[
    {hsJob: "2", id: "MjpZk6Ky9", nameJob: "fuimos a tirar basra"},
    
    {hsJob: "4", id: "F7MkipIlO", nameJob: "romper el  asd  asd as da da sd as"},
    
    {hsJob: "2", id: "Cpvdz61d8", nameJob: "a ver una  tu madre en tanga langa para la banda"},

]



const ExportExcel = ({StartFinishBreak, allData, AllJobHs}) => {
    console.log(StartFinishBreak);
    console.log(allData);
    console.log(AllJobHs);
    if(StartFinishBreak.length===0|| allData.length===0 || AllJobHs.length===0)return null;

    const mondayStartFinishBreak = StartFinishBreak.find( monday => {
        return monday.day === 'Monday';
    });
    const tuesdayStartFinishBreak = StartFinishBreak.find( tuesday => {
        return tuesday.day === 'Tuesday';
    });
    const wednesdayStartFinishBreak = StartFinishBreak.find( wednesday => {
        return wednesday.day === 'Wednesday';
    });
    const thursdayStartFinishBreak = StartFinishBreak.find( thursday => {
        return thursday.day === 'Thursday';
    });
    const fridayStartFinishBreak = StartFinishBreak.find( friday => {
        return friday.day === 'Friday';
    });
    const saturdayStartFinishBreak = StartFinishBreak.find( saturday => {
        return saturday.day === 'Saturday';
    });
    const sundayStartFinishBreak = StartFinishBreak.find( sunday => {
        return sunday.day === 'Sunday';
    });

        const mondayDateHs = allData.find( monday => {
            return monday.day === 'Monday';
        });
        const tuesdayDateHs = allData.find( tuesday => {
            return tuesday.day === 'Tuesday';
        });
        const wednesdayDateHs = allData.find( wednesday => {
            return wednesday.day === 'Wednesday';
        });
        const thursdayDateHs = allData.find( thursday => {
            return thursday.day === 'Thursday';
        });
        const  fridayDateHs = allData.find( friday => {
            return friday.day === 'Friday';
        });
        const saturdayDateHs = allData.find( saturday => {
            return saturday.day === 'Saturday';
        });
        const sundayDateHs = allData.find( sunday => {
            return sunday.day === 'Sunday';
        });

        
        
            const obteniendoLiteralMonday = AllJobHs.filter(monday =>{
            return monday.day === 'Monday';
            })
        
             const creandoLiteralMonday = obteniendoLiteralMonday.map(job =>(
                `${job.nameJob}:  (${job.hsJob} hs)
`
            ))
            const obteniendoLiteralTuesday = AllJobHs.filter(Tuesday =>{
            return Tuesday.day === 'Tuesday';
            })
        
             const creandoLiteralTuesday = obteniendoLiteralTuesday.map(job =>(
                `${job.nameJob}:  (${job.hsJob} hs)
`
            ))
            const obteniendoLiteralWednesday = AllJobHs.filter(Wednesday =>{
            return Wednesday.day === 'Wednesday';
            })
        
             const creandoLiteralWednesday = obteniendoLiteralWednesday.map(job =>(
                `${job.nameJob}:  (${job.hsJob} hs)
`
            ))
            const obteniendoLiteralThursday = AllJobHs.filter(Thursday =>{
            return Thursday.day === 'Thursday';
            })
        
             const creandoLiteralThursday = obteniendoLiteralThursday.map(job =>(
                `${job.nameJob}:  (${job.hsJob} hs)
`
            ))
            const obteniendoLiteralFriday = AllJobHs.filter(Friday =>{
            return Friday.day === 'Friday';
            })
        
             const creandoLiteralFriday = obteniendoLiteralFriday.map(job =>(
                `${job.nameJob}:  (${job.hsJob} hs)
`
            ))
            const obteniendoLiteralSaturday = AllJobHs.filter(Saturday =>{
            return Saturday.day === 'Saturday';
            })
        
             const creandoLiteralSaturday = obteniendoLiteralSaturday.map(job =>(
                `${job.nameJob}:  (${job.hsJob} hs)
`
            ))
            const obteniendoLiteralSunday = AllJobHs.filter(Sunday =>{
            return Sunday.day === 'Sunday';
            })
        
             const creandoLiteralSunday = obteniendoLiteralSunday.map(job =>(
                `${job.nameJob}:  (${job.hsJob} hs)
`
            ))
            
        
            
        


    const multiDataSet2 = [
        {
            columns: [""],
            data: [
                [{value:'Nevis Group LTD', style:{font: {sz: "18", bold: true}}}],
                [{ySteps: 2}],
                [{value:'Name'},{ xSteps: 1},{value:'Ramiro Diaz Daives'}],
                [{ySteps:2}],
                [{value:'Week Ending'},{ xSteps: 1},{value:'26/05/20'}],
                
            ]
        },
        {
            ySteps: 3, //will put space of 5 rows,
            columns: ["Day", "Date", "Job",'','','','Start','Finish','Breaks','Total Hs'],
            data: [
                [
                    {
                        value: `Monday`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${mondayDateHs ? mondayDateHs.date :'-'}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    
                    {
                        value: `${creandoLiteralMonday?creandoLiteralMonday:'-'}`,
                        style: {
                            border: {
                                top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            },
                            alignment:{horizontal: 'bottom', vertical:'bottom'},
                            
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: ``, 
                        
                        style: {
                            border: {
                                top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                            //    right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${mondayStartFinishBreak.timeStart}`, 
                        
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${mondayStartFinishBreak.timeFinish}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${mondayStartFinishBreak.break}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {value: `${mondayDateHs ? mondayDateHs.hours :'-'}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                ],
                [
                    {
                        value: `Tuesday`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        },
                    },
                    {
                        value: `${tuesdayDateHs ? tuesdayDateHs.date :'-'}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${creandoLiteralTuesday?creandoLiteralTuesday:'-'}`, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            },
                            alignment:{horizontal: 'bottom', vertical:'bottom'}
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${tuesdayStartFinishBreak.timeStart}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                
                    {
                        value: `${tuesdayStartFinishBreak.timeFinish}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${tuesdayStartFinishBreak.break}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {value: `${tuesdayDateHs ? tuesdayDateHs.hours :'-'}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                ],
                [
                    {
                        value: `Wednesday`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        },
                    },
                    {
                        value: `${wednesdayDateHs ? wednesdayDateHs.date :'-'}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${creandoLiteralWednesday?creandoLiteralWednesday:'-'}`, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            },
                            alignment:{horizontal: 'bottom', vertical:'bottom'}
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${wednesdayStartFinishBreak.timeStart}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                
                    {
                        value: `${wednesdayStartFinishBreak.timeFinish}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${wednesdayStartFinishBreak.break}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {value: `${wednesdayDateHs ? wednesdayDateHs.hours :'-'}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                ],
                [
                    {
                        value: `Thursday`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        },
                    },
                    {
                        value: `${thursdayDateHs ? thursdayDateHs.date :'-'}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${creandoLiteralThursday?creandoLiteralThursday:'-'}`, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            },
                            alignment:{horizontal: 'bottom', vertical:'bottom'}
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${thursdayStartFinishBreak.timeStart}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                
                    {
                        value: `${thursdayStartFinishBreak.timeFinish}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${thursdayStartFinishBreak.break}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {value: `${thursdayDateHs ? thursdayDateHs.hours :'-'}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                ],
                [
                    {
                        value: `Friday`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        },
                    },
                    {
                        value: `${fridayDateHs? fridayDateHs.date :'-'}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${creandoLiteralFriday?creandoLiteralFriday:'-'}`, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            },
                            alignment:{horizontal: 'bottom', vertical:'bottom'}
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${fridayStartFinishBreak.timeStart}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                
                    {
                        value: `${fridayStartFinishBreak.timeFinish}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${fridayStartFinishBreak.break}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {value: `${fridayDateHs ? fridayDateHs.hours :'-'}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                ],
                [
                    {
                        value: `Saturday`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        },
                    },
                    {
                        value: `${saturdayDateHs ? saturdayDateHs.date :'-'}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${creandoLiteralSaturday?creandoLiteralSaturday:'-'}`, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            },
                            alignment:{horizontal: 'bottom', vertical:'bottom'}
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${saturdayStartFinishBreak.timeStart}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                
                    {
                        value: `${saturdayStartFinishBreak.timeFinish}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${saturdayStartFinishBreak.break}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {value: `${saturdayDateHs ? saturdayDateHs.hours :'-'}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                ],
                [
                    {
                        value: `Sunday`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        },
                    },
                    {
                        value: `${sundayDateHs ? sundayDateHs.date :'-'}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${creandoLiteralSunday?creandoLiteralSunday:'-'}`, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            },
                            alignment:{horizontal: 'bottom', vertical:'bottom'}
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: ``, 
                        style: {
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                //left:{ style: "thick", color: 'black'},
                                //right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${sundayStartFinishBreak.timeStart}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                
                    {
                        value: `${sundayStartFinishBreak.timeFinish}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {
                        value: `${sundayStartFinishBreak.break}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                    {value: `${sundayDateHs ? sundayDateHs.hours :'-'}`, 
                        style: {
                            alignment:{horizontal: 'center', vertical:'center'},
                            border: {
                                //top:{ style: "thick", color: 'black'},
                                left:{ style: "thick", color: 'black'},
                                right:{ style: "thick", color: 'black'},
                                bottom:{ style: "thick", color: 'black'}
                            }
                        }
                    },
                ],
                
            ]
        }
    ]///
    return (
        <div>
            <ExcelFile 
                     //hideElement={false} true para descargar cuando direccionamos
                    element={<button>Download Data With Styles</button>}
            >
                    <ExcelSheet dataSet={multiDataSet2} name="Organizationn"/>
            </ExcelFile>
        </div>
    )
}

export default ExportExcel
