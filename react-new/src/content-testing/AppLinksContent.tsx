import { ProjectAppLink } from '../types/project.data';

interface AppLinksContentProps {
  appLink: ProjectAppLink;
}

export function AppLinksContent({ appLink }: AppLinksContentProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">App Connection Details</h2>
        <span className={`px-2 py-1 rounded-full text-sm ${
          appLink.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
        }`}>
          {appLink.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-500">Connected On</label>
          <p className="font-medium">{new Date(appLink.linkedAt).toLocaleDateString()}</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-500">Connected By</label>
          <p className="font-medium">{appLink.linkedBy}</p>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-gray-500">Permissions</label>
        <div className="flex flex-wrap gap-2">
          {appLink.config.permissions.map((permission, index) => (
            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
              {permission}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}