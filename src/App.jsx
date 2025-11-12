import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, Smartphone, Shield, Wallet, Zap, Clock, 
  ChevronDown, Menu, X, Star, CheckCircle, AlertCircle, 
  User, BarChart2, Package, History, Settings, LogOut, 
  Crown, Diamond, Gem, Gamepad2, Music, Film, 
  ArrowLeft, Eye, EyeOff, Copy, Check, AlertTriangle,
  Users, TrendingUp, Gift, Headphones, Mail, Phone,
  MapPin, Facebook, Twitter, Instagram, Youtube,
  ShoppingCart, Plus, Minus, Trash2, Download,
  Calendar, FileText, CreditCard as Card
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({
    name: 'يوسف المشرعي',
    role: 'رئيس الموقع',
    email: 'yousef@musharai.com',
    phone: '+20 123 456 7890',
    wallet: 15750,
    level: 'VIP Diamond',
    points: 8450,
    orders: 87,
    joined: '2021-05-15',
    avatar: 'https://placehold.co/100x100/8b5cf6/white?text=ي'
  });
  
  const [vicePresident] = useState({
    name: 'أبو جمال عبدالناصر',
    role: 'نائب رئيس الموقع',
    avatar: 'https://placehold.co/100x100/0f172a/64748b?text=أ',
    bio: 'خبراء بالعالم الرقمي والتجارة الإلكترونية بأكثر من 10 سنوات خبرة'
  });

  const [teamMembers] = useState([
    { name: 'محمد السعيد', role: 'رئيس الدعم الفني', avatar: 'https://placehold.co/80x80/0ea5e9/white?text=م' },
    { name: 'سارة علي', role: 'مدير العلاقات العملاء', avatar: 'https://placehold.co/80x80/ec4899/white?text=س' },
    { name: 'أحمد نجار', role: 'مطور البرمجيات', avatar: 'https://placehold.co/80x80/10b981/white?text=أ' },
    { name: 'فيصل عبدالله', role: 'أخصائي الأمن الإلكتروني', avatar: 'https://placehold.co/80x80/f59e0b/white?text=ف' }
  ]);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  
  const [orders] = useState([
    { id: 'ORD-9876', game: 'ببجي موبايل', amount: '3250 UC', price: 550, date: '2025-11-12', status: 'مكتمل', icon: 'https://placehold.co/40x40/1e3a8a/white?text=P' },
    { id: 'ORD-9875', game: 'فري فاير', amount: '1800 الماس', price: 320, date: '2025-11-10', status: 'مكتمل', icon: 'https://placehold.co/40x40/b91c1c/white?text=F' },
    { id: 'ORD-9874', game: 'تيك توك', amount: '5000 هدايا', price: 750, date: '2025-11-08', status: 'قيد المعالجة', icon: 'https://placehold.co/40x40/0ea5e9/white?text=T' },
    { id: 'ORD-9873', game: 'نتفليكس', amount: '3 أشهر', price: 900, date: '2025-11-05', status: 'مكتمل', icon: 'https://placehold.co/40x40/e50914/white?text=N' },
  ]);

  const [stats] = useState({
    totalSales: '2.3 مليون',
    activeUsers: '45,678',
    successRate: '99.8%',
    supportTime: '24/7'
  });

  // Expanded product catalog
  const products = [
    // Games
    { id: 1, name: 'ببجي موبايل', type: 'لعبة', category: 'battle-royale', coins: '660 UC', price: 12, img: 'https://placehold.co/120x120/1e3a8a/white?text=PUBG', gradient: 'from-blue-800 to-cyan-700', popular: true },
    { id: 2, name: 'فري فاير', type: 'لعبة', category: 'battle-royale', coins: '500 الماس', price: 10, img: 'https://placehold.co/120x120/b91c1c/white?text=FF', gradient: 'from-red-800 to-orange-700', popular: true },
    { id: 3, name: 'كلاش أوف كلانس', type: 'لعبة', category: 'strategy', coins: '1500 Gem', price: 18, img: 'https://placehold.co/120x120/6b21a8/white?text=Clash', gradient: 'from-purple-800 to-violet-700' },
    { id: 4, name: 'موبايل ليجيندز', type: 'لعبة', category: 'moba', coins: '1020 BP', price: 15, img: 'https://placehold.co/120x120/0f172a/64748b?text=ML', gradient: 'from-slate-800 to-slate-700' },
    { id: 5, name: 'كال أوف ديوتي', type: 'لعبة', category: 'fps', coins: '1200 CP', price: 20, img: 'https://placehold.co/120x120/dc2626/white?text=COD', gradient: 'from-rose-800 to-red-700' },
    { id: 6, name: 'أونو', type: 'لعبة', category: 'casual', coins: '2000 Gold', price: 8, img: 'https://placehold.co/120x120/f59e0b/white?text=UNO', gradient: 'from-amber-800 to-orange-700' },
    
    // Apps
    { id: 7, name: 'تيك توك', type: 'تطبيق', category: 'social', coins: 'هدايا VIP', price: 15, img: 'https://placehold.co/120x120/0ea5e9/white?text=TT', gradient: 'from-cyan-800 to-blue-700', popular: true },
    { id: 8, name: 'نتفليكس', type: 'اشتراك', category: 'entertainment', coins: '1 شهر', price: 30, img: 'https://placehold.co/120x120/e50914/white?text=Netflix', gradient: 'from-red-800 to-rose-700' },
    { id: 9, name: 'سبوتيفاي', type: 'اشتراك', category: 'music', coins: '3 أشهر', price: 25, img: 'https://placehold.co/120x120/1db954/white?text=Spotify', gradient: 'from-green-800 to-emerald-700' },
    { id: 10, name: 'يوتيوب بريميوم', type: 'اشتراك', category: 'entertainment', coins: '1 سنة', price: 85, img: 'https://placehold.co/120x120/ff0000/white?text=YT', gradient: 'from-red-800 to-rose-700' },
    
    // Store Credits
    { id: 11, name: 'آب ستور', type: 'رصيد', category: 'store', coins: '50$', price: 50, img: 'https://placehold.co/120x120/64748b/white?text=Apple', gradient: 'from-slate-800 to-gray-700' },
    { id: 12, name: 'جوجل بلاي', type: 'رصيد', category: 'store', coins: '25$', price: 25, img: 'https://placehold.co/120x120/16653f/white?text=Google', gradient: 'from-green-800 to-emerald-700' },
    { id: 13, name: 'باي بال', type: 'رصيد', category: 'store', coins: '100$', price: 160, img: 'https://placehold.co/120x120/0d47a1/white?text=PayPal', gradient: 'from-blue-900 to-indigo-800' },
    
    // Special Offers
    { id: 14, name: 'باقة الاحتراف', type: 'عرض خاص', category: 'bundle', coins: 'PUBG+FF+TT', price: 85, img: 'https://placehold.co/120x120/8b5cf6/white?text=Bundle', gradient: 'from-purple-800 to-pink-700', featured: true },
    { id: 15, name: 'باقة العائلة', type: 'عرض خاص', category: 'bundle', coins: 'نيتفليكس+يوتيوب', price: 110, img: 'https://placehold.co/120x120/ef4444/white?text=Family', gradient: 'from-red-800 to-orange-700', featured: true },
  ];

  const categories = [
    { id: 'all', name: 'الكل', icon: Package },
    { id: 'battle-royale', name: 'معركة ملكية', icon: Gamepad2 },
    { id: 'social', name: 'تطبيقات اجتماعية', icon: User },
    { id: 'entertainment', name: 'ترفيه', icon: Film },
    { id: 'store', name: 'رصيد متاجر', icon: Wallet },
    { id: 'bundle', name: 'باقات خاصة', icon: Gem }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      selectedCategory === 'all' 
        ? products 
        : products.filter(p => p.category === selectedCategory)
    );
  }, [selectedCategory]);

  const addToCart = (product) => {
    if (user.wallet < product.price) {
      alert('رصيد غير كافٍ في المحفظة! يرجى شحن المحفظة أولاً');
      return;
    }
    
    setCart([...cart, product]);
    setUser(prev => ({ ...prev, wallet: prev.wallet - product.price }));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', damping: 15, stiffness: 150 }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: 30, transition: { duration: 0.4 } }
  };

  const processPayment = () => {
    setLoading(true);
    setTimeout(() => {
      alert('تمت عملية الشراء بنجاح! سيتم توصيل الكوينز خلال 60 ثانية');
      setCart([]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div 
      dir="rtl" 
      className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white font-cairo overflow-x-hidden"
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-2xl border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2 rounded-2xl mr-3">
                  <Crown className="h-8 w-8 text-black" />
                </div>
                <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  كوينز أكاديمي
                </span>
              </div>
              
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-4 space-x-reverse">
                  {['الرئيسية', 'المنتجات', 'لوحة التحكم', 'الدعم', 'من نحن'].map((item) => (
                    <motion.button
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveSection(item.toLowerCase())}
                      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                        activeSection === item.toLowerCase() 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30' 
                          : 'text-purple-200 hover:bg-purple-900/50 hover:text-white'
                      }`}
                    >
                      {item}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="flex items-center space-x-6 space-x-reverse">
                <div className="relative">
                  <Wallet className="h-6 w-6 text-yellow-400" />
                  <span className="absolute -top-2 -left-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-black text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center border-2 border-yellow-900">
                    {user.wallet.toLocaleString('ar-EG')}
                  </span>
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-purple-900/50 to-pink-900/50 px-4 py-2 rounded-xl border border-purple-500/30 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center border-2 border-purple-300">
                    <span className="font-bold text-lg">{user.name.charAt(0)}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-white">{user.name}</div>
                    <div className="text-xs text-purple-300">{user.role}</div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="-mr-2 flex lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-purple-400 hover:text-white hover:bg-purple-800 focus:outline-none"
              >
                {isMenuOpen ? <X className="block h-8 w-8" /> : <Menu className="block h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/90 border-b border-purple-500/30">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
              {['الرئيسية', 'المنتجات', 'لوحة التحكم', 'الدعم', 'من نحن'].map((item) => (
                <motion.button
                  key={item}
                  whileTap={{ scale: 0.95 }}
                  className="block px-4 py-3 rounded-xl text-base font-bold w-full text-right hover:bg-gradient-to-r hover:from-purple-900/50 hover:to-pink-900/50 transition-all"
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
            <div className="pt-4 pb-4 border-t border-purple-700/50 px-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Wallet className="h-6 w-6 text-yellow-400 ml-3" />
                  <div>
                    <div className="font-bold">محفظتك</div>
                    <div className="text-yellow-300 font-bold text-xl">{user.wallet.toLocaleString('ar-EG')} EGP</div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-xl font-bold shadow-lg"
                >
                  شحن المحفظة
                </motion.button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Leadership */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgxMDAsIDExNiwgMTM2LCAwLjEpIi8+PHJlY3QgeD0iMjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgxMzgsIDYzLCAxNjYsIDAuMSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')] opacity-30"></div>
        
        <motion.div 
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 150 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-3 rounded-3xl">
              <Crown className="h-12 w-12 text-black" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">أكبر منصة شحن كوينزات</span> في الشرق الأوسط
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-10 font-medium">
            توصيل فوري - أفضل الأسعار - دعم فني 24/7
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            {['ببجي', 'فري فاير', 'تيك توك', 'جوجل بلاي'].map((game) => (
              <motion.button
                key={game}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-purple-500/40 transition-all transform hover:rotate-1 border-2 border-purple-300/30"
              >
                شحن {game}
              </motion.button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Leadership Section */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-purple-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-6 border border-purple-500/30 shadow-xl shadow-purple-900/40"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-yellow-400 to-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-yellow-900">
                  <span className="text-2xl font-bold text-black">ي</span>
                </div>
                <div className="mr-4">
                  <h3 className="text-xl font-bold text-yellow-300">يوسف المشرعي</h3>
                  <div className="flex items-center">
                    <Crown className="h-4 w-4 text-yellow-400 ml-1" />
                    <span className="text-sm font-medium text-purple-300">مؤسس ورئيس الموقع</span>
                  </div>
                </div>
              </div>
              <p className="text-purple-300 italic">
                "نسعى لتقديم أفضل تجربة شحن كوينزات بأمان وسرعة فائقة"
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-indigo-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-6 border border-purple-500/30 shadow-xl shadow-purple-900/40"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-4 border-purple-500/50">
                  <img 
                    src={vicePresident.avatar} 
                    alt={vicePresident.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mr-4">
                  <h3 className="text-xl font-bold text-purple-300">{vicePresident.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-purple-400 ml-1" />
                    <span className="text-sm font-medium text-purple-300">نائب رئيس الموقع</span>
                  </div>
                </div>
              </div>
              <p className="text-purple-300 italic">
                "ضمان الجودة والأمان في كل عملية شحن هو أولويتنا القصوى"
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Products Section with Categories */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
      >
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">معرض منتجاتنا</span> المميزة
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            اختر من بين مئات الخيارات للألعاب والتطبيقات مع أفضل الأسعار في السوق
          </p>
        </div>
        
        {/* Categories Navigation */}
        <div className="flex overflow-x-auto pb-6 mb-12 hide-scrollbar">
          <div className="flex space-x-4 space-x-reverse px-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ y: -3 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex flex-col items-center justify-center min-w-[120px] p-4 rounded-2xl transition-all ${
                  selectedCategory === category.id 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30' 
                    : 'bg-black/40 text-purple-300 hover:bg-purple-900/50'
                }`}
              >
                <category.icon className={`h-6 w-6 mb-2 ${selectedCategory === category.id ? 'text-white' : 'text-purple-400'}`} />
                <span className="font-bold text-sm">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`rounded-3xl overflow-hidden border ${product.featured ? 'border-2 border-yellow-500' : 'border-purple-500/20'} bg-black/60 backdrop-blur-sm transition-all duration-300 shadow-2xl ${product.featured ? 'shadow-yellow-500/40' : 'shadow-purple-900/40'} transform hover:scale-[1.02]`}
            >
              {product.featured && (
                <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                  الأكثر مبيعاً
                </div>
              )}
              
              <div className={`h-48 flex items-center justify-center ${product.gradient} p-4`}>
                <div className="bg-black/30 backdrop-blur-sm w-32 h-32 rounded-2xl flex items-center justify-center border-2 border-white/20">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                      {product.name}
                    </h3>
                    <span className="text-sm text-purple-400 font-medium">{product.type}</span>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-500 to-amber-600 text-black px-3 py-1 rounded-full font-bold text-sm">
                    {product.category === 'bundle' ? 'باقة' : 'جديد'}
                  </div>
                </div>
                
                <div className="my-4">
                  <div className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600">
                    {product.coins}
                  </div>
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-1">
                    {product.price} جنيه
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToCart(product)}
                  disabled={user.wallet < product.price}
                  className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 space-x-reverse transition-all ${
                    user.wallet >= product.price 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30' 
                      : 'bg-gray-800 cursor-not-allowed'
                  }`}
                >
                  <CreditCard className="h-6 w-6" />
                  <span>{user.wallet >= product.price ? 'شراء الآن' : 'رصيد غير كافٍ'}</span>
                </motion.button>
                
                <div className="mt-6 pt-4 border-t border-purple-500/20 flex flex-col space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="h-4 w-4 ml-2" />
                      <span>توصيل خلال 60 ثانية</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="h-4 w-4 ml-2" />
                      <span>99.9% نجاح</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-purple-400 text-sm">
                    <Shield className="h-4 w-4 ml-2" />
                    <span>دفع آمن 100%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-700 to-indigo-800 px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl shadow-purple-900/50 border-2 border-purple-500/30 hover:border-purple-400 transition-all"
          >
            استعرض جميع المنتجات
          </motion.button>
        </div>
      </motion.section>

      {/* Dashboard Section */}
      <AnimatePresence mode="wait">
        {activeSection === 'لوحة التحكم' && (
          <motion.section 
            key="dashboard"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">لوحة تحكم</span> المستخدم
              </h2>
              <p className="text-xl text-purple-300 max-w-3xl mx-auto">
                إدارة حسابك، محفظتك، وجميع طلباتك في مكان واحد
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* User Profile Card */}
              <motion.div 
                variants={itemVariants}
                className="lg:col-span-1 space-y-6"
              >
                <div className="bg-gradient-to-br from-purple-900/50 to-black/50 backdrop-blur-sm rounded-3xl border border-purple-500/30 overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-purple-900 to-pink-900"></div>
                  <div className="px-6 pb-6 -mt-12 relative">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 mx-auto border-4 border-black">
                      <div className="w-full h-full rounded-2xl flex items-center justify-center text-4xl font-bold text-black">
                        {user.name.charAt(0)}
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="text-2xl font-bold">{user.name}</h3>
                      <div className="flex justify-center items-center mt-2">
                        <Crown className="h-5 w-5 text-yellow-400 ml-1" />
                        <span className="font-medium text-purple-300">{user.role}</span>
                      </div>
                      <p className="text-purple-400 mt-1">{user.email}</p>
                      
                      <div className="mt-4 flex justify-center space-x-3 space-x-reverse">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} className={`h-5 w-5 ${i <= 4 ? 'text-yellow-400' : 'text-gray-600'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 border-t border-purple-500/20">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-purple-300">تاريخ الانضمام</span>
                        <span className="font-bold">{new Date(user.joined).toLocaleDateString('ar-EG')}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-purple-300">إجمالي الطلبات</span>
                        <span className="font-bold text-2xl text-purple-400">{user.orders}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-purple-300">النقاط المكتسبة</span>
                        <span className="font-bold text-yellow-400">{user.points.toLocaleString('ar-EG')}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Wallet Card */}
                <div className="bg-gradient-to-br from-indigo-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-6 border border-purple-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold flex items-center">
                      <Wallet className="h-6 w-6 text-yellow-400 ml-2" />
                      محفظتي
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-full"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </motion.button>
                  </div>
                  
                  <div className="text-center py-4">
                    <div className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600">
                      {user.wallet.toLocaleString('ar-EG')}
                    </div>
                    <div className="text-purple-400 mt-2">جنيه مصري</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-purple-700 to-indigo-800 py-3 rounded-xl font-bold"
                    >
                      شحن
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-amber-700 to-yellow-800 py-3 rounded-xl font-bold text-black"
                    >
                      سحب
                    </motion.button>
                  </div>
                </div>
              </motion.div>
              
              {/* Main Dashboard Content */}
              <div className="lg:col-span-3 space-y-8">
                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'الطلبات النشطة', value: '3', icon: Package, color: 'from-purple-600 to-pink-600' },
                    { title: 'إجمالي المبيعات', value: '87', icon: CreditCard, color: 'from-amber-600 to-yellow-600' },
                    { title: 'مستوى العضوية', value: user.level, icon: Crown, color: 'from-green-600 to-emerald-600' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-black/50 to-black/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"
                    >
                      <div className="flex items-center">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                          <stat.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="mr-4">
                          <h4 className="text-purple-400 text-sm font-medium">{stat.title}</h4>
                          <div className="text-2xl font-bold mt-1">{stat.value}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Orders Table */}
                <div className="bg-gradient-to-br from-black/50 to-black/70 backdrop-blur-sm rounded-3xl border border-purple-500/30 overflow-hidden">
                  <div className="p-6 border-b border-purple-500/20 flex justify-between items-center">
                    <h3 className="text-2xl font-bold flex items-center">
                      <History className="h-6 w-6 text-purple-400 ml-2" />
                      سجل الطلبات
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="text-sm font-medium text-purple-400 hover:text-white flex items-center"
                    >
                      عرض الكل <ChevronDown className="h-4 w-4 mr-1" />
                    </motion.button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-purple-300 text-sm font-medium bg-black/30">
                          <th className="text-right p-4">رقم الطلب</th>
                          <th className="text-right p-4">المنتج</th>
                          <th className="text-right p-4">الكمية</th>
                          <th className="text-right p-4">السعر</th>
                          <th className="text-right p-4">التاريخ</th>
                          <th className="text-right p-4">الحالة</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order) => (
                          <tr 
                            key={order.id} 
                            className="border-b border-purple-500/10 hover:bg-purple-900/20 transition-colors"
                          >
                            <td className="p-4 font-mono">{order.id}</td>
                            <td className="p-4 font-medium">{order.game}</td>
                            <td className="p-4">{order.amount}</td>
                            <td className="p-4 font-bold text-yellow-400">{order.price} جنيه</td>
                            <td className="p-4">{order.date}</td>
                            <td className="p-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                order.status === 'مكتمل' ? 'bg-green-900/50 text-green-400' : 
                                order.status === 'قيد المعالجة' ? 'bg-amber-900/50 text-amber-400' : 'bg-red-900/50 text-red-400'
                              }`}>
                                {order.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* Security Settings */}
                <div className="bg-gradient-to-br from-black/50 to-black/70 backdrop-blur-sm rounded-3xl p-6 border border-purple-500/30">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Shield className="h-6 w-6 text-purple-400 ml-2" />
                    إعدادات الأمان
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-purple-300 mb-1">
                        كلمة المرور الحالية
                      </label>
                      <div className="relative">
                        <input
                          type={passwordVisible ? "text" : "password"}
                          className="w-full bg-black/40 border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="********"
                        />
                        <button
                          onClick={() => setPasswordVisible(!passwordVisible)}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400"
                        >
                          {passwordVisible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-purple-300 mb-1">
                          كلمة المرور الجديدة
                        </label>
                        <input
                          type="password"
                          className="w-full bg-black/40 border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="أدخل كلمة المرور الجديدة"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-purple-300 mb-1">
                          تأكيد كلمة المرور
                        </label>
                        <input
                          type="password"
                          className="w-full bg-black/40 border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="أعد إدخال كلمة المرور"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-purple-300 mb-1">
                        رمز التحقق بخطوتين
                      </label>
                      <div className="flex items-center space-x-4 space-x-reverse">
                        <input
                          type="text"
                          className="flex-1 bg-black/40 border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="أدخل رمز التحقق"
                        />
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => copyToClipboard('Y0USEF-MUSH-2025')}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 rounded-xl font-bold flex items-center space-x-2 space-x-reverse"
                        >
                          {copied ? (
                            <>
                              <Check className="h-5 w-5" />
                              <span>تم النسخ</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-5 w-5" />
                              <span>نسخ الرمز</span>
                            </>
                          )}
                        </motion.button>
                      </div>
                      <p className="text-xs text-purple-400 mt-2 flex items-center">
                        <AlertTriangle className="h-4 w-4 ml-1 text-yellow-400" />
                        هذا الرمز يستخدم لتفعيل الحماية الإضافية لحسابك
                      </p>
                    </div>
                    
                    <div className="flex justify-end pt-4 border-t border-purple-500/20">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-xl font-bold shadow-lg shadow-purple-500/30"
                      >
                        تحديث الإعدادات
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-sm border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2 rounded-xl mr-3">
                  <Crown className="h-8 w-8 text-black" />
                </div>
                <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  كوينز أكاديمي
                </span>
              </div>
              <p className="text-purple-300 mb-6">
                أكبر منصة لشحن العملات الرقمية للألعاب والتطبيقات في الشرق الأوسط بأفضل الأسعار وجودة عالية
              </p>
              <div className="flex space-x-4 space-x-reverse">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-500/30 cursor-pointer hover:bg-purple-800/50 transition-colors"
                  >
                    <Icon className="h-5 w-5 text-purple-400" />
                  </motion.div>
                ))}
              </div>
            </div>
            
            {[
              {
                title: 'روابط سريعة',
                links: ['الرئيسية', 'المنتجات', 'عروض خاصة', 'الدعم الفني']
              },
              {
                title: 'المساعدة والدعم',
                links: ['مركز المساعدة', 'الشروط والأحكام', 'سياسة الخصوصية', 'اتصل بنا']
              },
              {
                title: 'معلومات الشركة',
                links: ['من نحن', 'فريق العمل', 'الوظائف', 'المدونة']
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-purple-300 mb-4 border-b border-purple-500/30 pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-purple-400 hover:text-white transition-colors flex items-center">
                        <ChevronDown className="h-4 w-4 ml-1 rotate-270" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-purple-500/20 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-purple-400">
                © {new Date().getFullYear()} كوينز أكاديمي. جميع الحقوق محفوظة.
              </p>
              <div className="flex items-center space-x-6 space-x-reverse text-sm text-purple-400">
                <span>مرخص من البنك المركزي المصري</span>
                <span>•</span>
                <span>رقم الترخيص: EG-FIN-2025-98765</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
    }
