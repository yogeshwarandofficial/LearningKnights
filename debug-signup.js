
const { createClient } = require('@supabase/supabase-js');

// Hardcoding credentials from the user's file to ensure we test the exact same config
const supabaseUrl = 'https://ilkpfoqmwufvcmhkpwce.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsa3Bmb3Ftd3VmdmNtaGtwd2NlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2MjI4ODAsImV4cCI6MjA4NDE5ODg4MH0.SuhslXCLKtYf1IvU3lXjxd2T4jVnyJ-Mwb-oJPmU31M';

const supabase = createClient(supabaseUrl, supabaseKey);

async function debugSignup() {
    const testEmail = `debug_test_${Date.now()}@example.com`;
    const testPass = 'password123';
    const testName = 'Debug User';

    console.log(`Attempting to sign up: ${testEmail}`);

    try {
        const { data, error } = await supabase.auth.signUp({
            email: testEmail,
            password: testPass,
            options: {
                data: {
                    name: testName,
                },
            },
        });

        if (error) {
            console.error('❌ Signup Error:', error.message);
            console.error('Full Error:', error);
        } else {
            console.log('✅ Signup Call Successful');
            console.log('User ID:', data.user?.id);
            console.log('Identities:', data.user?.identities);

            if (data.session) {
                console.log('✅ Session created immediately (Email confirmation likely OFF)');
            } else if (data.user && !data.session) {
                console.log('⚠️ User created but NO SESSION. (Email confirmation likely ON)');
                console.log('This explains why the app "collapses" or redirects to login - the user is not actually logged in yet.');
            }
        }

    } catch (err) {
        console.error('❌ Unexpected script error:', err);
    }
}

debugSignup();
