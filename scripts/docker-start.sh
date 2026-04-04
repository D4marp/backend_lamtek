#!/bin/sh
set -e

echo "⏳ Waiting for database connection..."
RETRY_COUNT=0
MAX_RETRIES=30

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
  if npm run migration:run 2>/dev/null; then
    echo "✅ Database migrations completed successfully"
    break
  fi
  
  RETRY_COUNT=$((RETRY_COUNT + 1))
  echo "⏳ Database connection attempt $RETRY_COUNT/$MAX_RETRIES..."
  sleep 2
  
  if [ $RETRY_COUNT -eq $MAX_RETRIES ]; then
    echo "❌ Failed to connect to database after $MAX_RETRIES attempts"
    echo "⚠️  Starting app anyway - migration may fail"
    break
  fi
done

echo "🚀 Starting LAM Teknik SaaS API on port ${PORT:-3000}..."
exec node dist/main
