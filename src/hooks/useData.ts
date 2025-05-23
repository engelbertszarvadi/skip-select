import { useEffect, useState } from 'react';

interface SkipSnakeCase {
  id: number;
  size: number;
  price_before_vat: number;
  vat: number;
  hire_period_days: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  forbidden: boolean;
  postcode: string;
  area: string;
  per_tonne_cost: number | null;
  transport_cost: number | null;
  created_at: string;
  updated_at: string;
}

export interface Skip {
  id: number;
  size: number;
  priceBeforeVat: number;
  vat: number;
  hirePeriodDays: number;
  allowedOnRoad: boolean;
  allowsHeavyWaste: boolean;
  forbidden: boolean;
  postcode: string;
  area: string;
  perTonneCost: number | null;
  transportCost: number | null;
  createdAt: string;
  updatedAt: string;
}

const mapToCamelCase = (skip: SkipSnakeCase): Skip => {
  return {
    id: skip.id,
    size: skip.size,
    priceBeforeVat: skip.price_before_vat,
    vat: skip.vat,
    hirePeriodDays: skip.hire_period_days,
    allowedOnRoad: skip.allowed_on_road,
    allowsHeavyWaste: skip.allows_heavy_waste,
    forbidden: skip.forbidden,
    postcode: skip.postcode,
    area: skip.area,
    perTonneCost: skip.per_tonne_cost,
    transportCost: skip.transport_cost,
    createdAt: skip.created_at,
    updatedAt: skip.updated_at,
  };
};

export const useData = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch(
          'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const camelCaseData = data.map(mapToCamelCase);
        setSkips(camelCaseData);
      } catch (error) {
        setError(error?.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  return { skips, loading, error };
};
