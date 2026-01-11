import { personalInfo } from '@/data/cv-data';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-medium">Email:</span>{' '}
                <a href={`mailto:${personalInfo.email}`} className="hover:text-gray-900 transition-colors">
                  {personalInfo.email}
                </a>
              </p>
              <p>
                <span className="font-medium">Phone:</span> {personalInfo.phone}
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Position</h3>
            <div className="text-gray-700">
              <p className="font-medium">{personalInfo.currentPosition}</p>
              <p>{personalInfo.currentInstitution}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Junbeom Kwon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
