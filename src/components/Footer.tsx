import React from 'react';
import { ShieldCheck, Github, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <ShieldCheck className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold">Trezor Bridge</span>
            </div>
            <p className="text-gray-400 mb-4">The essential connection between your Trezor hardware wallet and your computer.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Release Notes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">GitHub Repository</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Developer API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Troubleshooting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Status Page</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Trezor Bridge. All rights reserved.</p>
          <p className="mt-2 text-sm">Trezor Bridge is not affiliated with SatoshiLabs. This is an informational website only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;