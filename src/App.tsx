import { Button } from "./components/ui/button";
import { Play, Pause, Facebook, Instagram } from "lucide-react";
import { useState, useRef } from "react";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        onLoadedData={handleVideoLoad}
        style={{ display: videoLoaded ? 'block' : 'none' }}
      >
        <source src="/videos/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback Background Image (shows while video loads or if video fails) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYmlwbGFuZSUyMGZseWluZ3xlbnwxfHx8fDE3NTg1NDkwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080)',
          display: videoLoaded ? 'none' : 'block'
        }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="flex items-center justify-end px-8 py-6">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://j85fo32cm7l.typeform.com/to/vz6T9gZi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-colors px-6 py-2 rounded-full"
            >
              Join the ASC waitlist
            </a>
            <a 
              href="https://calendly.com/andrewlamcoaching/videocall" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-colors px-6 py-2 rounded-full"
            >
              Video Call
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-1 flex items-center px-8">
          <div className="max-w-2xl">
            {/* Trust Badge */}
            <div className="flex items-center space-x-2 mb-8">
              <div className="flex -space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1738566061505-556830f8b8f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODUxMzI3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional portrait"
                  className="w-8 h-8 rounded-full border-2 border-white/30 shadow-lg object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGJ1c2luZXNzbWFuJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU4NTQ4NjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business professional"
                  className="w-8 h-8 rounded-full border-2 border-white/30 shadow-lg object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1543879739-ab87be3df369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbGUlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4NTQ4NzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional male"
                  className="w-8 h-8 rounded-full border-2 border-white/30 shadow-lg object-cover"
                />
              </div>
              <span className="text-white/80 text-sm">We are changing hundreds of thousands of people</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl text-white mb-6 leading-[1.1]">
              For those born<br />
              to rise, not run.
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-lg mb-8 max-w-md">
              Become the man your son can be proud of.
            </p>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-colors px-6 py-3 rounded-full flex items-center space-x-2">
                <span>Start Your Journey</span>
              </button>
              <button 
                onClick={togglePlay}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" fill="white" />
                ) : (
                  <Play className="w-5 h-5 text-white ml-1" fill="white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="px-8 pb-8">
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/andrewlamla/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.1)]"
            >
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a 
              href="https://www.instagram.com/andrewlamkachai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.1)]"
            >
              <Instagram className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}