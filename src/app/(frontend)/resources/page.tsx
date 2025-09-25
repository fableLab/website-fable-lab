import { getPayload } from 'payload';
import ResourcesClient from '@/components/ResourcesClient';
import config from '@payload-config'

export default async function ResourcesPage() {
  const payload = await getPayload({ config });

  const resources = await payload.find({
    collection: 'resources',
    depth: 1,
    limit: 100,
    select: { slug: true, name: true, image: true, needs: true, linguistics: true, languages: true, categories: true, creators: true },
  });

  const languages = await payload.find({
    collection: 'languages',
    limit: 100,
    select: { name: true, code: true }
  });

  const categories = await payload.find({
    collection: 'categories',
    limit: 100,
    select: { name: true }
  });

  return (
    <div>
      <ResourcesClient languages={languages.docs} categories={categories.docs} initialResources={resources.docs} />
    </div>
  );
}
