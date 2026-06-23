import InvoiceTable from './features/invoices/invoice-table';
import UserTable from './features/users/user-table';

const App = () => {
  return (
    <div className='min-h-screen bg-zinc-950'>
      {/* Header */}
      <header className='border-b border-zinc-800 px-8 py-4'>
        <span className='text-sm font-mono text-zinc-400 tracking-widest uppercase'>
          Data Grid
        </span>
      </header>

      {/* Main */}
      <main className='px-8 py-10 max-w-7xl mx-auto'>
        <div className='mb-8'>
          <h1 className='text-2xl font-semibold text-zinc-100 tracking-tight'>
            Overview
          </h1>
          <p className='text-sm text-zinc-400 mt-1'>
            Manage and explore your data below.
          </p>
        </div>

        {/* Invoices section */}
        <section className='mb-8'>
          <div className='flex items-center justify-between mb-3'>
            <h2 className='text-xl font-medium text-zinc-200'>Invoices</h2>
          </div>
          <div className='rounded-lg border border-zinc-800 overflow-hidden'>
            <InvoiceTable />
          </div>
        </section>

        {/* Users section */}
        <section className='mb-8'>
          <div className='flex items-center justify-between mb-3'>
            <h2 className='text-xl font-medium text-zinc-200'>Users</h2>
          </div>
          <div className='rounded-lg border border-zinc-800 overflow-hidden'>
            <UserTable />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
