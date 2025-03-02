import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Download, HelpCircle, ArrowRight, ExternalLink, Github, Twitter, Facebook } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Trezor Bridge - Official Download & Setup Guide</title>
        <meta name="description" content="Download the official Trezor Bridge software - the essential connection between your Trezor hardware wallet and your computer. Step-by-step setup guide and troubleshooting." />
        <meta name="keywords" content="Trezor Bridge, Trezor wallet connection, hardware wallet software, cryptocurrency security, Trezor setup" />
        <link rel="icon" href="https://i.ibb.co/fzY2Lh4J/t-logo.png" />
        <meta property="og:title" content="Trezor Bridge - Official Download & Setup Guide" />
        <meta property="og:description" content="Download the official Trezor Bridge software - the essential connection between your Trezor hardware wallet and your computer." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trezor Bridge - Official Download & Setup Guide" />
        <meta name="twitter:description" content="Download the official Trezor Bridge software - the essential connection between your Trezor hardware wallet and your computer." />
        <link rel="canonical" href="https://trezorbridge.com" />
      </Helmet>

      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Trezor Bridge: Secure Connection for Your Hardware Wallet</h1>
                <p className="text-xl mb-6">The essential software that connects your Trezor device to your computer, ensuring safe and seamless cryptocurrency management.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#download" className="bg-white text-green-800 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg flex items-center justify-center">
                    <Download className="mr-2 h-5 w-5" />
                    Download Now
                  </a>
                  <a href="#guide" className="border border-white text-white hover:bg-white hover:text-green-800 font-bold py-3 px-6 rounded-lg flex items-center justify-center">
                    <HelpCircle className="mr-2 h-5 w-5" />
                    Setup Guide
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Trezor hardware wallet connected to computer" 
                  className="rounded-lg shadow-xl max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What is Trezor Bridge Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What is Trezor Bridge?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="bg-green-800 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Secure Connection</h3>
                <p className="text-gray-600">Trezor Bridge establishes an encrypted connection between your hardware wallet and computer, ensuring your private keys remain secure.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="bg-green-800 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Download className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Easy Installation</h3>
                <p className="text-gray-600">Simple download and installation process for Windows, macOS, and Linux, making Trezor Bridge accessible to all users.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="bg-green-800 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Essential Software</h3>
                <p className="text-gray-600">Trezor Bridge is required to manage your cryptocurrency assets through the Trezor Suite or Trezor Wallet web interface.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section id="content" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose lg:prose-xl max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-green-800">Understanding Trezor Bridge: The Essential Connection for Your Hardware Wallet</h2>
              
              <p>Trezor Bridge serves as the critical communication layer between your Trezor hardware wallet and your computer's operating system. This lightweight application enables secure data transfer, ensuring your cryptocurrency transactions remain protected from potential online threats. As cryptocurrency adoption continues to grow, understanding the role of Trezor Bridge becomes increasingly important for both new and experienced users.</p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-green-800">Why Trezor Bridge is Essential for Your Cryptocurrency Security</h3>
              
              <p>Trezor hardware wallets are designed with security as the top priority, keeping your private keys offline and protected from malware and phishing attacks. However, to interact with blockchain networks, you need a secure connection between your device and computer. This is precisely where Trezor Bridge comes in, providing the following benefits:</p>
              
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Enhanced Security:</strong> Trezor Bridge creates an encrypted communication channel, preventing man-in-the-middle attacks that could compromise your transactions.</li>
                <li><strong>Seamless Integration:</strong> The software integrates perfectly with Trezor Suite and the web wallet interface, providing a smooth user experience.</li>
                <li><strong>Cross-Platform Compatibility:</strong> Available for Windows, macOS, and Linux, ensuring all users can securely manage their digital assets.</li>
                <li><strong>Regular Updates:</strong> Frequent security patches and feature improvements keep your connection secure against emerging threats.</li>
                <li><strong>Lightweight Design:</strong> Minimal system resource usage while maintaining robust security protocols.</li>
              </ul>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-green-800">How Trezor Bridge Works</h3>
              
              <p>When you connect your Trezor device to your computer via USB, Trezor Bridge facilitates communication between your hardware wallet and the Trezor web interface or Trezor Suite desktop application. This connection allows you to:</p>
              
              <ul className="list-disc pl-6 mb-6">
                <li>View your cryptocurrency balances across multiple blockchains</li>
                <li>Send and receive digital assets securely</li>
                <li>Verify and sign transactions directly on your Trezor device</li>
                <li>Update your Trezor's firmware to the latest secure version</li>
                <li>Manage your recovery seed and passphrase protection</li>
              </ul>
              
              <p>Importantly, Trezor Bridge never has access to your private keys or recovery seed, maintaining the core security principle of hardware wallets—keeping sensitive information offline and protected.</p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-green-800">Setting Up Trezor Bridge: A Step-by-Step Guide</h3>
              
              <p>Installing and configuring Trezor Bridge is straightforward, designed to be accessible even for those new to cryptocurrency. The process typically involves:</p>
              
              <ol className="list-decimal pl-6 mb-6">
                <li><strong>Download:</strong> Obtain the official Trezor Bridge installer from the Trezor website, ensuring you're downloading from the legitimate source.</li>
                <li><strong>Installation:</strong> Run the installer and follow the on-screen instructions, which vary slightly depending on your operating system.</li>
                <li><strong>Connection Test:</strong> Once installed, connect your Trezor device to verify the bridge is functioning correctly.</li>
                <li><strong>Browser Integration:</strong> For web wallet users, ensure your browser recognizes Trezor Bridge for seamless interaction.</li>
              </ol>
              
              <p>For users who prefer not to install additional software, modern browsers with WebUSB support may allow direct connection to Trezor devices without Trezor Bridge. However, for maximum compatibility and security, installing Trezor Bridge remains the recommended approach.</p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-green-800">Troubleshooting Common Trezor Bridge Issues</h3>
              
              <p>While Trezor Bridge is designed for reliability, users occasionally encounter connection issues. Common problems and their solutions include:</p>
              
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Device Not Recognized:</strong> Try using a different USB cable or port, as connection problems often stem from hardware issues.</li>
                <li><strong>Bridge Not Running:</strong> Verify Trezor Bridge is running in your system tray or background processes.</li>
                <li><strong>Outdated Software:</strong> Ensure you're using the latest version of Trezor Bridge, as older versions may have compatibility issues.</li>
                <li><strong>Browser Conflicts:</strong> Some browser extensions can interfere with Trezor Bridge; try disabling them temporarily.</li>
                <li><strong>Operating System Permissions:</strong> On some systems, you may need to grant additional permissions for USB device access.</li>
              </ul>
              
              <p>The Trezor support team provides comprehensive documentation and assistance for users experiencing persistent issues with Trezor Bridge, ensuring you can always access your digital assets securely.</p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-green-800">Conclusion: The Vital Role of Trezor Bridge in Cryptocurrency Security</h3>
              
              <p>As cryptocurrency adoption continues to grow, the importance of secure storage solutions becomes increasingly evident. Trezor hardware wallets, combined with Trezor Bridge, provide a robust security framework for protecting your digital assets. By understanding the role and functionality of Trezor Bridge, you can ensure your cryptocurrency remains secure while maintaining convenient access when needed.</p>
              
              <p>Whether you're a long-term investor, active trader, or cryptocurrency enthusiast, properly setting up and maintaining Trezor Bridge is an essential step in your digital asset security strategy. With regular updates and a commitment to security, Trezor Bridge continues to evolve alongside the rapidly changing cryptocurrency landscape, providing peace of mind for users worldwide.</p>
            </article>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-16 bg-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Download Trezor Bridge</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">Get the latest version of Trezor Bridge for your operating system. Always download from official sources to ensure security.</p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white text-green-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Windows</h3>
                <p className="mb-4">Compatible with Windows 10 and 11</p>
                <a href="#" className="inline-flex items-center justify-center bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 w-full">
                  <Download className="mr-2 h-5 w-5" />
                  Download for Windows
                </a>
              </div>
              
              <div className="bg-white text-green-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">macOS</h3>
                <p className="mb-4">For macOS 10.15 and newer</p>
                <a href="#" className="inline-flex items-center justify-center bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 w-full">
                  <Download className="mr-2 h-5 w-5" />
                  Download for macOS
                </a>
              </div>
              
              <div className="bg-white text-green-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Linux</h3>
                <p className="mb-4">Ubuntu, Debian, Fedora & more</p>
                <a href="#" className="inline-flex items-center justify-center bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 w-full">
                  <Download className="mr-2 h-5 w-5" />
                  Download for Linux
                </a>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-lg mb-4">Looking for older versions or release notes?</p>
              <a href="#" className="inline-flex items-center text-white hover:underline">
                View all releases on GitHub
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Setup Guide Section */}
        <section id="guide" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Trezor Bridge Setup Guide</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
                  <span className="bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                  Download the Installer
                </h3>
                <p className="mb-4 text-gray-700">Download the appropriate Trezor Bridge installer for your operating system from the official Trezor website or the download section above.</p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-yellow-700"><strong>Security Tip:</strong> Always verify you're downloading from the official source to avoid malware.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
                  <span className="bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                  Run the Installation
                </h3>
                <p className="mb-4 text-gray-700">Open the downloaded file and follow the installation wizard. The process is straightforward and typically takes less than a minute.</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>On Windows: Run the .exe file and follow the prompts</li>
                  <li>On macOS: Open the .dmg file and drag to Applications</li>
                  <li>On Linux: Follow distribution-specific installation instructions</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
                  <span className="bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                  Connect Your Trezor Device
                </h3>
                <p className="mb-4 text-gray-700">Use the USB cable that came with your Trezor to connect it to your computer. Make sure your device is powered on.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
                  <span className="bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                  Verify the Connection
                </h3>
                <p className="mb-4 text-gray-700">Open Trezor Suite or visit the Trezor Wallet web interface. Your device should be automatically detected if Trezor Bridge is installed correctly.</p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="text-blue-700"><strong>Note:</strong> Trezor Bridge runs in the background. You don't need to manually start it each time.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
                  <span className="bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">5</span>
                  Troubleshooting
                </h3>
                <p className="mb-4 text-gray-700">If your device isn't recognized:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Try a different USB cable or port</li>
                  <li>Restart Trezor Bridge (check system tray)</li>
                  <li>Restart your computer</li>
                  <li>Reinstall Trezor Bridge</li>
                </ul>
                <a href="#" className="text-green-800 hover:underline flex items-center">
                  View detailed troubleshooting guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">What is Trezor Bridge and why do I need it?</h3>
                <p className="text-gray-700">Trezor Bridge is a communication tool that allows your computer to interact with your Trezor hardware wallet. It's essential for managing your cryptocurrencies through the Trezor web wallet or Trezor Suite desktop application.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Is Trezor Bridge safe to use?</h3>
                <p className="text-gray-700">Yes, Trezor Bridge is developed by SatoshiLabs, the creators of Trezor hardware wallets. It's designed with security in mind and doesn't have access to your private keys or recovery seed. Always download from official sources to ensure safety.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Do I need to run Trezor Bridge every time I use my Trezor?</h3>
                <p className="text-gray-700">Trezor Bridge runs as a background service after installation. You don't need to manually start it each time you connect your Trezor device. It will automatically facilitate communication when needed.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Can I use Trezor without installing Trezor Bridge?</h3>
                <p className="text-gray-700">Modern browsers with WebUSB support (like Chrome) may allow direct connection to Trezor devices without Bridge. However, for maximum compatibility and security, installing Trezor Bridge is recommended.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">How do I update Trezor Bridge?</h3>
                <p className="text-gray-700">When a new version is available, you'll typically be notified when using Trezor Suite or the web wallet. Simply download and install the latest version, which will automatically replace the older one.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Cryptocurrencies?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Download Trezor Bridge today and take the first step toward truly secure cryptocurrency management with your Trezor hardware wallet.</p>
            <a href="#download" className="bg-white text-green-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg inline-flex items-center">
              <Download className="mr-2 h-5 w-5" />
              Download Trezor Bridge
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;