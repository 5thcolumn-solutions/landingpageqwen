import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Award, TrendingUp, Users, Globe, ChevronLeft, ChevronRight, Star, CheckCircle, Mic, Video, Newspaper, Globe as GlobeIcon, Bot, Mail as MailIcon, User, Clock, GraduationCap, Building2, Calendar, Layout } from 'lucide-react';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Carousel data with actual event images
  const carouselImages = [
    {
      id: 1,
      src: "https://i.imgur.com/7uZ4k9g.png", // Utility Free Podcast logo
      alt: "Utility Free Podcast"
    },
    {
      id: 2,
      src: "https://i.imgur.com/5vVQYqK.png", // Glitch Noir Show poster
      alt: "Glitch Noir Show"
    },
    {
      id: 3,
      src: "https://i.imgur.com/8fDdXcW.png", // Purple Space Place event
      alt: "Purple Space Place Event"
    },
    {
      id: 4,
      src: "https://i.imgur.com/6rGjRzO.png", // Bornless event
      alt: "Bornless AMA Event"
    }
  ];

  const partnerLogos = [
    "https://i.imgur.com/7uZ4k9g.png", // Utility Free Podcast
    "https://i.imgur.com/5vVQYqK.png", // Glitch Noir Show
    "https://i.imgur.com/8fDdXcW.png", // Purple Space Place
    "https://i.imgur.com/6rGjRzO.png", // Bornless Event
    "https://i.imgur.com/9HtJwYp.png", // GlitchNoir_Studios logo
    "https://placehold.co/120x60/1f2937/ffffff?text=Archaag+Studios"
  ];

  const caseStudies = [
    {
      id: 1,
      title: "24/7 Customer Service Automation",
      industry: "E-commerce",
      results: "+280% lead capture rate",
      description: "Implemented AI agents that never miss calls and automatically qualify leads with complete contact information and call context.",
      image: "https://placehold.co/400x250/1e40af/ffffff?text=AI+Customer+Service"
    },
    {
      id: 2,
      title: "Immersive Brand Experience",
      industry: "Real Estate",
      results: "+340% engagement rate",
      description: "Created custom 3D spatial environments with Archaag Studios for global simulcast events, providing interactive brand storytelling.",
      image: "https://placehold.co/400x250/059669/ffffff?text=3D+Environment"
    },
    {
      id: 3,
      title: "Team Performance Optimization",
      industry: "Technology",
      results: "+185% productivity increase",
      description: "Delivered comprehensive staff training programs that enhanced team capabilities and streamlined operational workflows.",
      image: "https://placehold.co/400x250/dc2626/ffffff?text=Staff+Training"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Chatbot responses
  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm Qwen, your AI assistant at 5thColumn Solutions. How can I help you today?";
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      return "Our pricing is customized based on your specific needs and project scope. Could you tell me more about what you're looking for?";
    } else if (lowerMessage.includes('service') || lowerMessage.includes('offer') || lowerMessage.includes('help')) {
      return "We offer Agentic AI solutions, staff training programs, virtual/in-person event organization with 3D spatial environments through our partnership with Archaag Studios, and comprehensive content creation services.";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return "You can reach us through our contact form on this page, or email us at info@5thcolumn.solutions. We typically respond within 24 hours!";
    } else if (lowerMessage.includes('podcast') || lowerMessage.includes('content') || lowerMessage.includes('production')) {
      return "We have 4 amazing podcasts: Glitch.Noir_Show, UtilityFreePodcast, DevTalk, and Money<Mindset! After featuring you on our show, our production team creates short-form videos for 9 platforms, transcribes episodes for our newsletter ./Insider.Intel_, and publishes Medium articles for SEO impact. Plus, we leverage our global influencer network to create real buzz for your brand!";
    } else if (lowerMessage.includes('ai agent') || lowerMessage.includes('customer service') || lowerMessage.includes('call')) {
      return "Our 24/7 AI agents never miss another phone call! They automatically collect caller's phone, email, and name, convert interactions into detailed leads with call context, and integrate with powerful chatbot website integrations for online lead capture. Plus, our marketing AI agents automate the entire outreach process from lead generation to campaign execution!";
    } else if (lowerMessage.includes('training') || lowerMessage.includes('staff') || lowerMessage.includes('workshop')) {
      return "We offer comprehensive staff training programs, both virtual and in-person, designed to enhance your team's capabilities and optimize performance across all business functions.";
    } else if (lowerMessage.includes('event') || lowerMessage.includes('archaag') || lowerMessage.includes('3d') || lowerMessage.includes('spatial')) {
      return "We partner with Archaag Studios, an architectural firm, to design custom 3D spatial environments for your events. This allows for global simulcast reach and provides an interactive way for potential customers and business partners to experience your brand's mission in an immersive environment!";
    } else if (lowerMessage.includes('thank')) {
      return "You're welcome! Is there anything else I can assist you with?";
    } else {
      return "I understand you're asking about our services. For more specific information, I'd recommend filling out our contact form so our team can provide you with personalized assistance. How else can I help?";
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const userMessage = { type: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response after delay
    setTimeout(() => {
      const botResponse = { type: 'bot', content: getBotResponse(inputMessage) };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <GlobeIcon className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">5thColumn.Solutions</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">Case Studies</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <button 
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              <MessageCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Space Mono font */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-mono text-gray-900 mb-6">
              Automate. Optimize. <span className="text-blue-600">Future-Proof</span> Your Business.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-sans">
              Transform your business with 24/7 AI agents, immersive 3D events, comprehensive staff training, and cutting-edge digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started Today
              </a>
              <a href="#case-studies" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              We combine cutting-edge technology with innovative strategies to create winning solutions for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-sans">Agentic AI Solutions</h3>
              <p className="text-gray-600 font-sans">
                24/7 AI customer service agents and automated marketing campaigns that replace entry-level employees.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-sans">Staff Training</h3>
              <p className="text-gray-600 font-sans">
                Comprehensive virtual and in-person training programs to enhance team capabilities and performance.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-sans">Immersive Events</h3>
              <p className="text-gray-600 font-sans">
                Virtual & in-person events with custom 3D spatial environments designed with Archaag Studios.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-sans">Content Creation</h3>
              <p className="text-gray-600 font-sans">
                <strong>Glitch.Noir_Studios</strong> - 4 podcasts with multi-platform content distribution.
              </p>
            </div>
          </div>
          
          {/* Detailed Agentic AI Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sans">Never Miss Another Opportunity</h3>
                <p className="text-gray-700 mb-6 font-sans">
                  Our Agentic AI solutions ensure you never miss another phone call or lead:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans"><strong>24/7 AI Customer Service Agents</strong> - Answer every call, automatically collect caller's phone, email, and name</span>
                  </div>
                  <div className="flex items-start">
                    <MessageCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans"><strong>Smart Lead Conversion</strong> - Transform calls into detailed leads with complete context and reason for contact</span>
                  </div>
                  <div className="flex items-start">
                    <MailIcon className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans"><strong>Automated Marketing Campaigns</strong> - AI agents scrape targeted contacts, generate qualified leads, and launch direct mail/email campaigns</span>
                  </div>
                  <div className="flex items-start">
                    <User className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans"><strong>Employee Replacement</strong> - Effectively replace entry-level roles like social media interns or personal assistants</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans"><strong>Focus on Growth</strong> - Free up your time to concentrate on what matters most for your business</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4 font-sans">AI Agent Capabilities</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="font-medium text-blue-900 font-sans">📞 Phone Call Handling</div>
                    <div className="text-sm text-blue-700 mt-1 font-sans">24/7 availability, automatic data collection, lead qualification</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="font-medium text-green-900 font-sans">💬 Website Chatbots</div>
                    <div className="text-sm text-green-700 mt-1 font-sans">Lead magnet integration, instant response, qualification</div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="font-medium text-purple-900 font-sans">📧 Marketing Automation</div>
                    <div className="text-sm text-purple-700 mt-1 font-sans">Lead scraping, campaign creation, multi-channel outreach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Staff Training Section */}
          <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sans">Comprehensive Staff Training</h3>
                <p className="text-gray-700 mb-6 font-sans">
                  Elevate your team's performance with our expert-led training programs:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <GraduationCap className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans"><strong>Virtual Training Sessions</strong> - Interactive online workshops accessible from anywhere</span>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans"><strong>In-Person Workshops</strong> - Hands-on training with real-world scenarios and team building</span>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans"><strong>Customized Curriculum</strong> - Tailored programs designed specifically for your industry and team needs</span>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans"><strong>Performance Optimization</strong> - Measurable improvements in productivity and operational efficiency</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4 font-sans">Training Focus Areas</h4>
                <div className="space-y-2">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium text-green-900 font-sans">AI & Technology Integration</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium text-blue-900 font-sans">Digital Marketing Strategies</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="font-medium text-purple-900 font-sans">Customer Service Excellence</div>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="font-medium text-orange-900 font-sans">Leadership & Team Management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Immersive Events Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sans">Immersive Event Experiences</h3>
                <p className="text-gray-700 mb-6 font-sans">
                  Partner with us and Archaag Studios to create unforgettable brand experiences:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Building2 className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans"><strong>Custom 3D Spatial Environments</strong> - Architecturally designed virtual spaces that reflect your brand identity</span>
                  </div>
                  <div className="flex items-start">
                    <GlobeIcon className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans"><strong>Global Simulcast Capability</strong> - Reach audiences worldwide simultaneously with seamless streaming</span>
                  </div>
                  <div className="flex items-start">
                    <Layout className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans"><strong>Interactive Brand Storytelling</strong> - Engage potential customers and partners through immersive mission experiences</span>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans"><strong>Hybrid Event Solutions</strong> - Seamlessly integrate virtual and in-person experiences for maximum impact</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4 font-sans">Archaag Studios Partnership</h4>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <Building2 className="w-4 h-4 text-purple-600 mr-2" />
                    <span className="font-medium font-sans">Architectural Design</span>
                  </div>
                  <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
                    <Layout className="w-4 h-4 text-indigo-600 mr-2" />
                    <span className="font-medium font-sans">3D Environment Creation</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <GlobeIcon className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="font-medium font-sans">Global Distribution</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <Users className="w-4 h-4 text-green-600 mr-2" />
                    <span className="font-medium font-sans">Audience Engagement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content Creation Section */}
          <div className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sans">Complete Content Ecosystem</h3>
                <p className="text-gray-700 mb-6 font-sans">
                  After being featured on our show, our production team transforms your episode into a comprehensive content strategy:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Video className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans">Short-form videos optimized for 9 different social platforms</span>
                  </div>
                  <div className="flex items-start">
                    <Newspaper className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans">Transcribed episodes featured in our ./Insider.Intel_ newsletter</span>
                  </div>
                  <div className="flex items-start">
                    <GlobeIcon className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans">SEO-optimized Medium articles for maximum online visibility</span>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans">Amplification through our global influencer network for real industry buzz</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4 font-sans">Our Podcast Network</h4>
                <div className="space-y-2">
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <Mic className="w-4 h-4 text-purple-600 mr-2" />
                    <span className="font-medium font-sans">Glitch.Noir_Show</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <Mic className="w-4 h-4 text-green-600 mr-2" />
                    <span className="font-medium font-sans">UtilityFreePodcast</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Mic className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="font-medium font-sans">DevTalk</span>
                  </div>
                  <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                    <Mic className="w-4 h-4 text-orange-600 mr-2" />
                    <span className="font-medium font-sans">Money<Mindset</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">Our Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Explore our portfolio of successful implementations across all our service areas.
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {carouselImages.map((image) => (
                  <div key={image.id} className="w-full flex-shrink-0">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-96 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="flex justify-center mt-4 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sans">Our Strategic Partners</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img 
                  src={logo} 
                  alt={`Partner ${index + 1}`} 
                  className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Real results from real clients across all our service offerings.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded font-sans">
                      {study.industry}
                    </span>
                    <div className="flex ml-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 font-sans">{study.title}</h3>
                  <p className="text-gray-600 mb-4 font-sans">{study.description}</p>
                  <div className="flex items-center text-green-600 font-semibold font-sans">
                    <CheckCircle className="w-5 h-5 mr-1" />
                    {study.results}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-sans">Get In Touch</h2>
              <p className="text-xl text-gray-600 mb-8 font-sans">
                Ready to transform your business with our comprehensive solutions? Contact us today for a free consultation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-gray-700 font-sans">info@5thcolumn.solutions</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-gray-700 font-sans">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-gray-700 font-sans">San Francisco, CA</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-sans"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-sans"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-sans"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-sans"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center font-sans"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <GlobeIcon className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold">5thColumn.Solutions</span>
            </div>
            <p className="text-gray-400 mb-6 font-sans">
              Agentic AI Solutions, Immersive Experiences & Digital Marketing
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-sans">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-sans">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-sans">Sitemap</a>
            </div>
            <p className="text-gray-500 mt-8 font-sans">
              © 2024 5thColumn.Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col z-50">
          <div className="bg-blue-600 text-white p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              <span className="font-semibold">Qwen Assistant</span>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 mt-8">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Hello! I'm Qwen, your AI assistant. How can I help you today?</p>
              </div>
            )}
            {messages.map((msg, index) => (
              <div key={index} className={`mb-4 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-3 rounded-lg max-w-xs ${
                  msg.type === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-left">
                <div className="inline-block p-3 bg-gray-100 text-gray-800 rounded-lg rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="flex">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors font-sans"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chatbot Toggle Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-4 right-4 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center z-40"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default App;
