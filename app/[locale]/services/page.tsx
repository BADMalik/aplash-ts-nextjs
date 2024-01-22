import Link from 'next/link';

// Images
import blogImg01 from '@/assets/images/blog/blog_01.jpg';
import blogImg02 from '@/assets/images/blog/blog_02.jpg';
import blogImg03 from '@/assets/images/blog/blog_03.jpg';
import blogImg04 from '@/assets/images/blog/blog_04.jpg';
export const dynamic = "force-dynamic";
// ------------
import { Locale } from '../../../i18n-config';
import { getDictionary } from '../../../get-dictionary';
import Services from '@/components/ServicesClient';
// ------------

const Blog = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang);
  return (
    <main className="services">
      <div id="content" className="services-content">
        <Services dictionary={dictionary} />
      </div>
    </main>
  );
};

export default Blog;
