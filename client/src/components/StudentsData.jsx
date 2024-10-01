import { dateTimeSeperator } from "../util/dateTimeSperator";

const StudentsData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id,Name,Reg,course,semister,Tag,createdAt} = curUser;
                    //const TimeIn = dateTimeSeperator(inTime);
                    //const Timeout = dateTimeSeperator(inTime);

                    return (
                        <tr key={id}>
                            <td>{Name}</td>
                            <td>{Reg}</td>
                            <td>{course}</td>
                            <td>{semister}</td>
                            <td>{createdAt}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default StudentsData;