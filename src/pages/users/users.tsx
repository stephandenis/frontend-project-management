import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { GetUsers } from '../../graphql/users/queries';

interface User {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  identification: string;
  role: string;
  status: string;
}

const Users = () => {
  const { data, error, loading } = useQuery(GetUsers);

  useEffect(() => {
    if (error) {
      toast.error('Failed to get users');
    }
  }, [error]);

  if (loading)
    return (
      <div className='h-screen flex items-center justify-center'>
        Loading...
      </div>
    );

  return (
    <div className='p-10'>
      <div className='overflow-x-auto'>
        <table className='min-w-full text-sm divide-y-2 divide-gray-200'>
          <thead>
            <tr>
              <th className='px-4 py-2 font-medium text-left text-gray-900'>
                Name
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900'>
                Surname
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900'>
                Email
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900'>
                Identification
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900'>
                Role
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900'>
                Status
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-200'>
            {data.Users.map((u: User) => (
              <tr key={u._id}>
                <td className='px-4 py-2 font-medium text-gray-900'>
                  {u.name}
                </td>
                <td className='px-4 py-2 text-gray-700'>{u.lastName}</td>
                <td className='px-4 py-2 text-gray-700'>{u.email}</td>
                <td className='px-4 py-2 text-gray-700'>{u.identification}</td>
                <td className='px-4 py-2 text-gray-700'>{u.role}</td>
                <td className='px-4 py-2 text-gray-700'>{u.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
