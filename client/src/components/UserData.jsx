import { dateTimeSeperator } from "../util/dateTimeSperator";

const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id,Reg,Name,course,inTime,outTime} = curUser;
                    //const TimeIn = dateTimeSeperator(inTime);
                    //const Timeout = dateTimeSeperator(inTime);

                    return (
                        <tr key={id}>
                            <td>{Reg}</td>
                            <td>{Name}</td>
                            <td>{course}</td>
                            <td>{inTime}</td>
                            <td>{outTime}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;