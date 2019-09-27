import axios from 'axios'

const BASEURL = 'http://localhost:3003/api'

export function getSummary(){
    const request = axios.get(`${BASEURL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}