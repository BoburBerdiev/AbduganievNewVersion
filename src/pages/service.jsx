import {PageSectionTItle , ServiceBannerRow} from '@/components'

const service = () => {
  return (
    <main className="py-24">
      <div className="container">
        <PageSectionTItle
          title={'Услуги'}
          row={false}
          subTitle={
            'Каждая крупная компания должна благодарить не только себя, но и тех, кто стоял рядом с ней и верил в нее. Ведь самый главный принцип в нашей работе – доверие.'
          }
        />
        <div className='lg:py-26 xl:py-36'>
          <ServiceBannerRow />
        </div>
      </div>
    </main>
  );
};

export default service;
