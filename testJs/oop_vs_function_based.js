// class based vs function based 
// real life example by creating user 
//start
// ১. আলাদা আলাদা ফাংশন
try {
const createUser = (name, email, password) => {
  return {
    name: name,
    email: email,
    password: password,
    createdAt: new Date().toISOString()
  };
};

const validateUser = (user) => {
  const errors = [];
  
  if (!user.name || user.name.length < 2) {
    errors.push('নাম কমপক্ষে ২ অক্ষর হতে হবে');
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(user.email)) {
    errors.push('সঠিক ইমেইল দিন');
  }
  
  if (!user.password || user.password.length < 6) {
    errors.push('পাসওয়ার্ড কমপক্ষে ৬ অক্ষর হতে হবে');
  }
  
  return errors;
};

const saveUserToDB = async (user) => {
  // API কল
  const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  return response.json();
};

// ২. ব্যবহার
const handleRegister = async (name, email, password) => {
  // স্টেপ বাই স্টেপ লজিক
  const user = createUser(name, email, password);
  
  const errors = validateUser(user);
  if (errors.length > 0) {
    return { success: false, errors };
  }
  
  try {
    const savedUser = await saveUserToDB(user);
    return { success: true, user: savedUser };
  } catch (error) {
    return { success: false, errors: ['ডাটাবেসে সেভ করতে সমস্যা'] };
  }
};

// ৩. কল করা
const result = await handleRegister('রহিম', 'rahim@email.com', '123456');
} catch (error) {
console.log("fuction base logic error"+ error);

}
// ১. ক্লাস ডিফিনিশন
try {
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = new Date().toISOString();
    this.role = 'user';
    this.cart = [];
    this.orders = [];
  }
  
  // ২. মেথড - ক্লাসের ভিতরে ফাংশন
  validate() {
    const errors = [];
    
    if (!this.name || this.name.length < 2) {
      errors.push('নাম কমপক্ষে ২ অক্ষর হতে হবে');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      errors.push('সঠিক ইমেইল দিন');
    }
    
    if (!this.password || this.password.length < 6) {
      errors.push('পাসওয়ার্ড কমপক্ষে ৬ অক্ষর হতে হবে');
    }
    
    return errors;
  }
  
  async save() {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this)
    });
    return response.json();
  }
  
  addToCart(product) {
    this.cart.push(product);
  }
  
  clearCart() {
    this.cart = [];
  }
}

// ৩. ইনহেরিটেন্স
class AdminUser extends User {
  constructor(name, email, password) {
    super(name, email, password);  // প্যারেন্ট ক্লাসের কনস্ট্রাক্টর কল
    this.role = 'admin';
  }
  
  canManageProducts() {
    return true;
  }
  
  canManageUsers() {
    return true;
  }
}

// ৪. ব্যবহার
const handleRegister = async (name, email, password) => {
  // ক্লাস ইনস্ট্যান্স তৈরি
  let user;
  if (email === 'admin@example.com') {
    user = new AdminUser(name, email, password);
  } else {
    user = new User(name, email, password);
  }
  
  // মেথড কল
  const errors = user.validate();
  if (errors.length > 0) {
    return { success: false, errors };
  }
  
  try {
    const savedUser = await user.save();
    return { success: true, user: savedUser };
  } catch (error) {
    return { success: false, errors: ['ডাটাবেসে সেভ করতে সমস্যা'] };
  }
};

// ৫. কল করা
const result = await handleRegister('রহিম', 'rahim@email.com', '123456');
} catch (error) {
    console.log("class base logic error"+ error);
    
}