import React from 'react';
import ReactExport from 'react-export-excel';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

var pruebaVector =[
    {hsJob: "2", id: "MjpZk6Ky9", nameJob: "fuimos a tirar basra"},
    
    {hsJob: "4", id: "F7MkipIlO", nameJob: "romper el  asd  asd as da da sd as"},
    
    {hsJob: "2", id: "Cpvdz61d8", nameJob: "a ver una  tu madre en tanga langa para la banda"},

]
var creandoLiteral = pruebaVector.map(job =>(
    `${job.nameJob}:  (${job.hsJob} hs)
`
))
///


const ExportExcel = ({StartFinishBreak, allData, AllJobHs}) => {
    console.log(StartFinishBreak);
    console.log(allData);
    console.log(AllJobHs);
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
                        value: `22-Jun`, 
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
                        value: `${creandoLiteral}`,
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
                        value: `8.00 am`, 
                        
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
                        value: `5.00 pm`, 
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
                        value: `30 mins`, 
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
                    {value: `8.5 hs`, 
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
                        value: `23-Jun`, 
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
                        value: `${creandoLiteral}`, 
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
                        value: `8.00 am`, 
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
                        value: `5.00 pm`, 
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
                        value: `30 mins`, 
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
                    {value: `8.5 hs`, 
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
                        value: `24-Jun`, 
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
                        value: `${creandoLiteral}`, 
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
                        value: `8.00 am`, 
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
                        value: `5.00 pm`, 
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
                        value: `30 mins`, 
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
                    {value: `8.5 hs`, 
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
                        value: `25-Jun`, 
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
                        value: `${creandoLiteral}`, 
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
                        value: `8.00 am`, 
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
                        value: `5.00 pm`, 
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
                        value: `30 mins`, 
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
                    {value: `8.5 hs`, 
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
                        value: `26-Jun`, 
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
                        value: `${creandoLiteral}`, 
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
                        value: `8.00 am`, 
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
                        value: `5.00 pm`, 
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
                        value: `30 mins`, 
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
                    {value: `8.5 hs`, 
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
                        value: `27-Jun`, 
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
                        value: `${creandoLiteral}`, 
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
                        value: `8.00 am`, 
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
                        value: `5.00 pm`, 
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
                        value: `30 mins`, 
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
                    {value: `8.5 hs`, 
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
                        value: `28-Jun`, 
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
                        value: `${creandoLiteral}`, 
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
                        value: `8.00 am`, 
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
                        value: `5.00 pm`, 
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
                        value: `30 mins`, 
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
                    {value: `8.5 hs`, 
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
