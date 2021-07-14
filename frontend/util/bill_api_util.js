//index
export const fetchBills =()=>(
    $.ajax({
        method: 'get',
        url: 'api/bills'
    }))

//create
export const createBill =(bill)=>(
    $.ajax({
        method: 'post',
        url: 'api/bills',
        data: {bill}
    }))

//show
export const fetchBill =(id)=>(
    $.ajax({
        method: 'get',
        url: `api/bills/${id}`,
        data:{id}
    }))

//update
export const updateBill =(bill)=>(
    $.ajax({
        method: 'patch',
        url: `api/bills/${bill.id}`,
        data: {bill}
    }))

    //delete

    export const deleteBill =(id)=>(
    $.ajax({
        method: 'patch',
        url: `api/bills/${id}`,
        data:{id}
    }))


