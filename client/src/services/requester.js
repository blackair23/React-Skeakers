import swal from 'sweetalert';

const request = async (method, url, data) => {
    try {
        console.log('requester data', data);
        const user = localStorage.getItem('auth');
        const auth = JSON.parse(user || '{}'); 

        let headers = {};
        if(auth.accessToken) {
            headers['X-Authorization'] = auth.accessToken;
        }

        let buildReq;
        
        if(method === 'GET'){
            buildReq = fetch(url, { headers });
        } else {
            buildReq = fetch(url, {
                method,
                headers: {
                    ...headers,
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(data)
            })
        }
        const response = await buildReq;
        // console.log(await response.json());
        console.log(response.status);
        if(response.status == 204){
            // const result = await response.json();
            return response;
        };
        if(!response.ok){
            const result = await response.json();
            throw new Error(result.message);
        };
        const result = await response.json();
        console.log('aide na poslednata', result);
        return result; 
    } catch (error) {
        swal({
            icon: "error",
            text: error.message,
         });
    }
};

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE');