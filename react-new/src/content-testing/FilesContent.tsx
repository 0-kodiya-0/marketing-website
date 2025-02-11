import { ProjectFile } from '../types/project.data';

interface FilesContentProps {
  file: ProjectFile;
}

export function FilesContent({ file }: FilesContentProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{file.name}</h2>
        <span className="text-sm text-gray-500">
          {(file.size / 1024).toFixed(1)} KB
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-500">Type</label>
          <p className="font-medium">{file.type}</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-500">Source</label>
          <p className="font-medium capitalize">{file.source}</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-500">Created</label>
          <p className="font-medium">{new Date(file.created).toLocaleDateString()}</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-500">Modified</label>
          <p className="font-medium">{new Date(file.lastModified).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-gray-500">Tags</label>
        <div className="flex flex-wrap gap-2">
          {file.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}