interface RateLimit {
    count: number;
    lastAttempt: number;
}

const loginAttempts = new Map<string, RateLimit>();

const MAX_ATTEMPTS = 5;
const COOLDOWN_PERIOD = 15 * 60 * 1000; // 15 minutes in milliseconds

export function checkRateLimit(ip: string): { allowed: boolean; remainingTime?: number } {
    const now = Date.now();
    const attempt = loginAttempts.get(ip);

    if (!attempt) {
        return { allowed: true };
    }

    if (attempt.count >= MAX_ATTEMPTS) {
        const timePassed = now - attempt.lastAttempt;
        if (timePassed < COOLDOWN_PERIOD) {
            return { 
                allowed: false, 
                remainingTime: Math.ceil((COOLDOWN_PERIOD - timePassed) / 1000 / 60) 
            };
        } else {
            // Cooldown finished, reset
            loginAttempts.delete(ip);
            return { allowed: true };
        }
    }

    return { allowed: true };
}

export function recordAttempt(ip: string, success: boolean) {
    const now = Date.now();
    const attempt = loginAttempts.get(ip);

    if (success) {
        loginAttempts.delete(ip);
        return;
    }

    if (!attempt) {
        loginAttempts.set(ip, { count: 1, lastAttempt: now });
    } else {
        attempt.count += 1;
        attempt.lastAttempt = now;
        loginAttempts.set(ip, attempt);
    }
}
