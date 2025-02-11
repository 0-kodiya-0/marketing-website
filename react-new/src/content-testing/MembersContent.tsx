import { ProjectMember } from '../types/project.data';

interface MembersContentProps {
  member: ProjectMember;
}

export function MembersContent({ member }: MembersContentProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Member Details</h2>
        <span className={`px-2 py-1 rounded-full text-sm ${
          member.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
        }`}>
          {member.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-500">Role</label>
          <p className="font-medium">{member.role}</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-500">Joined</label>
          <p className="font-medium">{new Date(member.joinedAt).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-gray-500">Permissions</label>
        <div className="flex flex-wrap gap-2">
          {member.permissions.map((permission, index) => (
            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
              {permission}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}